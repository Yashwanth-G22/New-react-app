import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serverMethod } from '../../../hooks/serverFetchMethods';
import { Iproducts } from '../../utils/types';
import './login.css';
import './table.css'
import Table from './table';

export default function Admin() {
  const navigate = useNavigate()
  const [view, setView] = useState<string>('none')
  const [newData, setNewData] = useState([])

  const [productDetails, setProductDetails] = useState<Iproducts>({ name: '', image: '', price: '' })

  const newProduct = {
    name: productDetails.name,
    image: productDetails.image,
    price: productDetails.price
  }

  async function handleChange(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (productDetails.name !== undefined  && productDetails.image !== undefined && productDetails.price !== undefined) {
      console.log(productDetails.name, productDetails.image, productDetails.price)
      let result = await serverMethod.postSingleItem(newProduct)
      console.log(result)
      setNewData(oldData => [...oldData, result])
      setProductDetails({  name: '', image: '', price: '' })
    }
  }
  function addNewProduct() {
    setView('');
  }

  async function getAllItems() {
    let out = await serverMethod.getAllItems()
    console.log(out)
    out ? setNewData(out) : 'Error'
  }
  useEffect(() => {
    getAllItems()
  }, [])
  function deleteSingleItem(id: number): void {
    serverMethod.deleteSingleItem(id);
    setNewData(oldData => [...newData])
  }
  return (<>
    <h2 align="center">Admin Page</h2>
    <div>
      <button onClick={addNewProduct} style={{ display: view ? '' : 'none' }} className='admin-button' >Add new product</button>
      <div style={{ display: view }}>
        <form action="submit" className='add-new-item' onSubmit={handleChange}>

          <label htmlFor="">Name :</label>
          <input type="text" placeholder='Brand Name '
            value={productDetails.name}
            onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })} />

          <label htmlFor="">Image :</label>
          <input type="text" placeholder='Image Url string'
            value={productDetails.image}
            onChange={(e) => setProductDetails({ ...productDetails, image: e.target.value })} />

          <label htmlFor="">Price :</label>
          <input type="number" placeholder='Enter price'
            value={productDetails.price}
            onChange={(e) => setProductDetails({ ...productDetails, price: Number(e.target.value) })} />

          <button type='submit' className='new-item-button'>Add product</button>
        </form>
      </div>
    </div>

    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            newData?.map((items) => {
              return <>
                <Table {...{items, deleteSingleItem}}/>
              </>
            })
          }
        </tbody>
      </table>
    </div>
  </>
  )
}



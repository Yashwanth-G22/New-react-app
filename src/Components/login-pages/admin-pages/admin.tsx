import React, { ChangeEvent, useEffect, useState , useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import { serverMethod } from '../../../../hooks/serverFetchMethods';
import { Iproducts } from '../../../types';
import '../login.css';
import '../table.css'
import {dataBaseUrl} from '../../../../application.json'
import Container from './container';

export default function Admin() {
  const navigate = useNavigate()
  const [view, setView] = useState<string>('none')
  const [newData, setNewData] = useState <Iproducts[]>([])
  let productUrl = dataBaseUrl.products

  const [productDetails, setProductDetails] = useState<Iproducts>({ name: '', image: '', price: '' })

  const newProduct = {
    name: productDetails.name,
    image: productDetails.image,
    price: productDetails.price
  }

  async function handleChange(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (productDetails.name !== '' 
      && productDetails.image !== '' 
      && productDetails.price !== '') {
      console.log(productDetails.name, productDetails.image, productDetails.price)
      let newItem = await serverMethod.postSingleItem(productUrl,newProduct)
      console.log(newItem)
      setNewData(oldItems => [...oldItems, newItem])
      setProductDetails({  name: '', image: '', price: '' })
    }else{
      console.log("error")
    }
  }
  function addNewProduct() {
    setView('');
  }

  async function getAllItems() {
    let out = await serverMethod.getAllItems(productUrl);
    console.log(out);
    out ? setNewData(out) : console.log('Error');
  }
  useEffect(() => {
    getAllItems()
  }, [])
  const deleteSingleItem =(id: number)=>{
    serverMethod.deleteSingleItem(productUrl,id);
    getAllItems();
  }
  return (<>
    <h2 className='admin-title'>Admin Page</h2>
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
    <Container newData = {newData} deleteSingleItem = {deleteSingleItem}/>
  </>
  )
}


// function container(){

//   const [data,setDate]=useState();
//   useEffect()=>(
//     setDate(data);
//   )

//   const add = ()=>(

//   );

//   const delete =(id)=>(

//   )

//   <table data={data} add={add}/ delete={delete}>
// }



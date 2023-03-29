import React, { useEffect, useState } from 'react'
import { Iproducts } from '../../utils/types';
import { Link } from 'react-router-dom';
import { serverMethod } from '../../../hooks/serverFetchMethods';
import './Product.css'

// export let url = `http://localhost:4000/products`;
export default function Products() {
  const [items, setItems] = useState<Iproducts[]>([]);
  console.log(items)

  useEffect(() => {
    serverMethod.getAllItems().then(data => setItems(data) )} , [])
  return (
    <>
      <div className='container'>
        {
          items?.map((item) => {
            return <div className='product-view' key={item.id}>
              <h4>Name : {item.name}</h4>
              <img src={item.image} className='product-image' />
              <h5>Price : {item.price}</h5>
              <select name="" id="">
                <option value="">size</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
              <Link to='/cart'><button >Add To Cart</button></Link>
            </div>
          })
        }
      </div>
    </>
  )
}

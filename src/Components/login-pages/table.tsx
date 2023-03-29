import React from 'react'
import { serverMethod } from '../../../hooks/serverFetchMethods';
import './table.css'

export default function Table({ items , deleteSingleItem}) {
  return (<tr>
        <td>{items.id}</td>
        <td>{items.name}</td>
        <td><img src= {items.image}alt="" /></td>
        <td>{items.price}</td>
        <td><button onClick={()=>{deleteSingleItem(items.id)}}>Delete</button> <button>Update</button></td>
      </tr>)
}

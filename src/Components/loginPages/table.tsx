import React from 'react'
import { serverMethod } from '../../../hooks/serverFetchMethods';
import './table.css'

export default function Table(props : Array<object>) {
    const { data }=props;
    function deleteSingleItem () {
        serverMethod.deleteSingleItem(data.id);
        
    }
  return (<tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td><img src= {data.image}alt="" /></td>
        <td>{data.price}</td>
        <td><button onClick={deleteSingleItem}>Delete</button> <button>Update</button></td>
      </tr>)
}
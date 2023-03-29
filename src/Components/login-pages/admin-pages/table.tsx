import React from 'react'
import { serverMethod } from '../../../../hooks/serverFetchMethods';
import '../table.css'

export default function Table( props : any ) {
  const {data , deleteSingleItem} = props;
  return (<tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td><img src= {data.image}alt="" /></td>
        <td>{data.price}</td>
        <td><button onClick={()=>{deleteSingleItem(data.id)}}>Delete</button></td>
      </tr>)
}

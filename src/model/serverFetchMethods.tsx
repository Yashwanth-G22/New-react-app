import React from 'react'
import { Iproducts } from '../utils/interface';

export let url = `http://localhost:4000/products`;

 export const serverMethod = {
    getAllItems: async function () {
        return await fetch(url, { method: 'GET' })
        
    },
    
    postSingleItem: async function (object : Iproducts) {
        const response = await set(url, {
            method: 'POST',
            body: JSON.stringify(object)
        })
        return response.json();
    },
    putSingleItem: async function () {
        await set(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                
            })
        })
    },
    deleteSingleItem: function (id : number) {
        set(`${url}/${id}`, {
            method: 'DELETE',
        })
    },
    deleteAllItems: function () {
        set(`https://mk-todo-web-api.azurewebsites.net/deleteAll`, {
            method: 'DELETE'
        })
    }
}
export default function serverFetchMethods() {
 
  return (
    <div></div>
   )
}

function set(url : string, options : any) : Promise<Response > | any{
    try{
     const header = new Headers
    header.append('content-type', 'application/json');
    return fetch(url, {
        ...options,
        headers: header,
    })}catch(err){
     console.log("something error")
    }
 }

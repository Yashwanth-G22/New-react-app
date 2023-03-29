
import { Iproducts } from '../src/utils/types';

export let url = `http://localhost:4000/products`;

 export const serverMethod = {
    getAllItems: async function () {
        return await (await fetch(url, { method: 'GET' })).json()
        
    },
    
    postSingleItem: async function (object : Iproducts) {
        const response = await set(url, {
            method: 'POST',
            body: JSON.stringify(object)
        })
        return response.json();
    },
    putSingleItem: async function (id : number) {
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

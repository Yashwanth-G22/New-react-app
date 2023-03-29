
import { Iproducts } from '../src/types';


 export const serverMethod = {
    getAllItems: async function (url : string) {
        return await (await fetch(url, { method: 'GET' })).json()
        
    },
    
    postSingleItem: async function ( url : string , object : object ) {
        const response = await setObjectStructure(url, {
            method: 'POST',
            body: JSON.stringify(object)
        })
        return response.json();
    },
    putSingleItem: async function (url : string,id : number) {
        await setObjectStructure(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                
            })
        })
    },
    deleteSingleItem: function (url : string,id : number) {
        setObjectStructure(`${url}/${id}`, {
            method: 'DELETE',
        })
    },
    deleteAllItems: function () {
        setObjectStructure(`https://mk-todo-web-api.azurewebsites.net/deleteAll`, {
            method: 'DELETE'
        })
    }
}


function setObjectStructure(url : string, options : any) : Promise<Response > | any{
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

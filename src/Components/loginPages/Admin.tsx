import { style } from '@mui/system';
import React ,{ ChangeEvent, useState }from 'react';
import { serverMethod } from '../../model/serverFetchMethods';
import { Iproducts } from '../../utils/interface';

export default function Admin() {
  const [id , setId] = useState<number>()
  const [name , setName] = useState<string>()
  const [image , setImage] = useState<string>()
  const [price , setPrice] = useState<string>()
  const [ view , setView ] = useState<string>('none')

  const newProduct = {
    id : id,
    name : name ,
    image : image,
    price : price
  }

  async function handleChange(e : ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    if(name !== undefined && id !== undefined && image !== undefined && price !== undefined){
      console.log(name , id , image , price)

     let result = await serverMethod.postSingleItem(newProduct)
    }
  }
  function addNewProduct(){
    setView('');
  }

  return (<>
        <div>
          <div>

          </div>
          <button onClick={addNewProduct} >Add new product</button>
          <div style={{display : view}}>
            <form action="" onSubmit={handleChange}>
              <div>
              <label htmlFor="">Enter Id :</label>
              <input type="number" placeholder='Enter Id' onChange={(e)=>setId(e.target.value)}/>
              </div>
              <div>
              <label htmlFor="">Name :</label>
              <input type="text" placeholder='Brand Name ' onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div>
              <label htmlFor="">Image :</label>
              <input type="text"  placeholder='Image Url string' onChange={(e)=>setImage(e.target.value)}/>
              </div>
              <div> 
              <label htmlFor="">Price :</label>
              <input type="number" placeholder='Enter price' onChange={(e)=>setPrice(e.target.value)}/>
              </div>
              <button type='submit'>Add product</button>
            </form>
          </div>
        </div>
    </>
  )
}



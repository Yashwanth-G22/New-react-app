import React , { memo} from 'react'
import { Icontainer } from '../../../types'
import Table from './table'
 function Container({newData , deleteSingleItem} : Icontainer) {
  return (<>
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
                <Table data={items} deleteSingleItem = {deleteSingleItem}/>
              </>
            })
          }
        </tbody>
      </table>
    </div>
    </>
  )
}
export default Container

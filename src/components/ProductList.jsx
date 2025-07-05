import React,{useState,useEffect} from 'react'
import axios from 'axios'
import useProducts from './useProducts'
import Productitem from './Productitem'

function ProductList() {

const {products,error}=useProducts()
const [searchItem,setSearchItem]=useState('')
const filteredItems=products.filter((product)=>product.title.toLowerCase().includes(searchItem.toLowerCase()))

if(error){
  return <p>Error:{error}</p>
}
if (products.length==0){
  return <p>Loading...</p>
}
  return (
    <div className='product-list'>
      <h2>Product list</h2>
      <input type="text" placeholder='Search by product' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
      {
        filteredItems.length === 0 ? (
        <p>No matching products found.</p>
      ) : (      
            <div className="product-grid"> 
              {
                filteredItems.map((product) => (
                    <Productitem product={product} key={product.id} />
                 
                ))
              }
            </div>
          )
      }
    </div>
  )
}

export default ProductList

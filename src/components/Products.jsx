import React from 'react'
import ProductInfo from './ProductInfo'

function Products() {
  let products = [["image1","shoe1","$1000"],["image2","shoe2","$2000"],["image3","shoe3","$2999"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"],["image2","shoe2","$2000"]]
  return (

    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"10px",margin:"10px"}}>
      {products.map((prod)=>{
        return <ProductInfo img={prod[0]} name={prod[1]} price={prod[2]}></ProductInfo>
      })}
    </div>
  )
}

export default Products
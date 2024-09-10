import React from 'react'

export default function ProductInfo({img,name,price}) {
  return (
    <div style={{border:"solid",margin:"20px",width:"100px",borderColor:"black",padding:"20px"}}>
        <img src={img}></img>
        <hr/>
        <p style={{fontFamily:"monospace",fontWeight:"bold",fontSize:"20px"}}>{name}</p>
        <p>{price}</p>
        <button type='submit' style={{ backgroundColor: "yellow", fontWeight: "bold", borderRadius: "8px", border: "solid px",borderColor:"black" }}>ADD</button>
    </div>
  )
}

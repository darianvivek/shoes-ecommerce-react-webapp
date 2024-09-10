import React from 'react'
import Marquee from "react-fast-marquee";
import './home.css';
function Home()
{
  let img=["/Users/darianvivek/Desktop/web applications/react apps/practice/shoes/images/download (1).jpeg","/Users/darianvivek/Desktop/web applications/react apps/practice/shoes/images/download (2).jpeg","/Users/darianvivek/Desktop/web applications/react apps/practice/shoes/images/download (3).jpeg","shoes/images/download.jpeg"]
  return (
    <div>
      <div className='move'>
      <Marquee>SUMMER SALE FROM 15TH MAY-25TH MAY!!!!</Marquee></div>
          </div>
  )
}

export default Home
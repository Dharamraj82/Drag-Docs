import React, { useRef, useState } from 'react'
import Cards from './Cards'
import { color } from 'motion/react';


function Forground() {
   const bond = useRef(null);

    const data = [
        {
            bgColor :"white",
            color: "black",
            para:"Unity in diversity, India's strength and pride.", 
            fileSize : "0.3mb", 
            button : false, 
            contents :{isNeed: true, color:"blue", content:"Uplaoded"},
        },
        {
            bgColor :"pink",
            color: "yellow",
            para:"India: A land of culture, colors, and wisdom.", 
            fileSize : "0.4mb", 
            button : true, 
            contents :{isNeed: true, color:"green", content:"Download"},
        },
        {
            bgColor :"blue",
            color: "sky",
            para:"Incredible India, where history meets modernity seamlessly.", 
            fileSize : "0.6mb", 
            button : false, 
            contents :{isNeed: true, color:"blue", content:"Uplaoded"},
        },
        {
            color: "White",
            bgColor :"black",
            para:"Diverse traditions unite to form one incredible nation.", 
            fileSize : "0.5mb", 
            button : true, 
            contents :{isNeed: true, color:"green", content:"Download"},
        },
        {
            color: "blue",
            bgColor :"sky",
            para:"India shines with heritage, resilience, and vibrant unity.", 
            fileSize : "0.9mb", 
            button : true, 
            contents :{isNeed: false, color:"blue", content:"Download"},
        },
    ]
    
  return (
        <>
      <div ref={bond} className='h-full w-full fixed top-0 left-0 z-[3] flex flex-wrap gap-14'>
        {data.map((element, indx)=>(
        <Cards key={indx} data = {element} reference={bond}/>
        ))}
      </div>
        </>
  )
}

export default Forground
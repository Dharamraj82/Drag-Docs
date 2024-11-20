import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdArrowRoundDown } from "react-icons/io";
import { IoClose, IoScale } from "react-icons/io5";
import { motion } from "motion/react"




function Cards({data, reference}) {
  return (
        <>
         <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:100, bounceDamping:10}} className='relative flex-shrink-0 h-72 w-60 bg-zinc-300 rounded-[43px] px-7 py-10 overflow-hidden text-zinc-900'>
         <FaFileAlt />
         <p className='text-lg leading-tight font-semibold mt-5'>{data.para}</p>
         <div className='w-full absolute bottom-0 right-0 '>
           <div className=' flex items-center justify-between mb-2  px-7 py-4 '>
           <h1>{data.fileSize}</h1>
           <span className='flex w-6 h-6 bg-zinc-900 rounded-full items-center justify-center'>
           {data.button ? <IoMdArrowRoundDown size="0.9em" color='#fff'/> : <IoClose size="1.3em" color='#fff'/>}
           </span>
           </div>
          {data.contents.isNeed && (
             <div className={`w-full py-3 ${data.contents.color === "blue"?"bg-blue-400" : "bg-green-500"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.contents.content}</h3>
           </div>
           )}
         </div>
         </motion.div>
         </>
  )
}

export default Cards
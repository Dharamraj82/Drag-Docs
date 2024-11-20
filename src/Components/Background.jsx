import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
    <div className='w-full py-8 absolute top-[4.5%] flex justify-center text-blue-500 text-semibold text-2xl '>Documents</div>
      <h1 className='text-[13vw] font-semibold tracking-tighter leading-none text-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs</h1>
   </div>   
    </>
  )
}

export default Background
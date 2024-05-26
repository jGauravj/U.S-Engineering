import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen  w-full dark:bg-zinc-950 bg-[#FFFEFB] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex'>
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-[#FFFEFB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='lg:mx-36 md:mx-10 mx-5 w-full mt-20 flex flex-col z-30 '>
        <h1 className='text-5xl text-center'>Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          <div className='border rounded-lg'>
            <h1>djfhdfubu</h1>
          </div>
          <div className='border rounded-lg'>
            <h1>djfhdfubu</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndexMenuItem = ({items}) => {
  return (
    <div className='flex flex-wrap justify-between bg-background2 p-5 border border-black/10 rounded-lg'>
        {items.map((submenu, index) => (
            <div key={index} className='w-[25%] flex justify-center'>
                <Link href={submenu.url} className='w-[95%] relative'>
                    <img src={submenu.imagen} className='w-full rounded-lg'/>
                    <span className='text-white font-extrabold absolute bottom-0 p-5 text-3xl uppercase textshadow'>{submenu.title}</span>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default IndexMenuItem

import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import { Bag } from 'iconsax-react'
import Link from 'next/link'

const Navbar = () => {
    

  return (
    <header className='bg-background2 w-full h-20 flex justify-between items-center px-10 border-b-8 border-b-accent2 z-40 sticky top-0'>
        <div>
            <Image
                alt='logo'
                width={120}
                height={80}
                src={'/imagenes/logo.svg'}/>
        </div>
        <div className='flex gap-5'>
            <Menu/>
            <Link href={'/cart'} className='bg-accent2 rounded-full p-2'>
                <Bag size="20" color="#fff"/>
            </Link>
        </div>
    </header>
  )
}

export default Navbar

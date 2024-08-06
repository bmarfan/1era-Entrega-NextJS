import React from 'react'
import Image from 'next/image'
import DatosIndex from './DatosIndex'
import { Box, CallCalling, CardTick1, ReceiptDisscount } from 'iconsax-react'

const HeaderIndex = () => {
  return (
   <>
     <div className='w-full h-[400px] bg-cover bg-center bg-[url("/header.jpg")] flex items-center justify-center relative filter-image'>
        <Image src={'/imagenes/logo-blanco.svg'} width={600} height={500} alt='PaperInk' className='absolute '/>
     </div>
     <div className='flex justify-center'>
     <div className='flex justify-between bg-background2 m-5 rounded-lg p-5 border border-black/10 container'>
        <DatosIndex icon={<Box size="32" color="var(--accent)" variant="Outline"/>} texto={'Lorem ipsum dolor'}/>
        <DatosIndex icon={<CallCalling size="32" color="var(--accent)" variant="Outline"/>} texto={'Lorem ipsum dolor'}/>
        <DatosIndex icon={<CardTick1 size="32" color="var(--accent)" variant="Outline"/>} texto={'Lorem ipsum dolor'}/>
        <DatosIndex icon={<ReceiptDisscount size="32" color="var(--accent)" variant="Outline"/>} texto={'Lorem ipsum dolor'}/>
     </div>
     </div>
   </>

  )
}

export default HeaderIndex

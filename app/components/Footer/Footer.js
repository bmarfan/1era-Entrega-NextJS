import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white/70 border border-black/0.5 text-gray-500'>
        <div className='flex flex-wrap justify-between items-center h-full'>
            <div className='py-5 px-20 flex flex-col'>
                <span><b className='text-accent'>Teléfono</b>  +569 12345678</span>
                <span><b className='text-accent'>Correo</b>  info@nombre.cl</span>
                <span><b className='text-accent'>Horario</b>  Lunes a Viernes de 9:00-17:30h</span>
            </div>
            <div className='px-20'>
                <span>© 2024 Bernardita Marfán</span>
            </div>
        </div>
    </div>
  )
}

export default Footer

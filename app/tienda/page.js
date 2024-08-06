import React from 'react'
import Header from '../components/Productos/Header'
import Sidebar from '../components/Productos/Sidebar'
import ItemListContainer from '../components/Productos/ItemListContainer'

const page = () => {
  return (
    <div className='relative flex justify-center flex-wrap'>
      <div className='grid md:grid-cols-[332px_minmax(409px,_1fr)] gap-2 my-16 container'>
        <Sidebar/>
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default page

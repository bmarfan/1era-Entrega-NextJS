'use client'
import React from 'react'
import { productosData } from '@/app/ProductosData'
import { useParams } from 'next/navigation'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const params = useParams()
    
    const isProduct = (product) =>{
        return product.id === params.producto
    }
    const productRef = productosData.find(isProduct)

  return (
    <div className='flex justify-center items-center flex-col py-20'>
        <ItemDetail {... productRef}/>
    </div>
  )
}

export default ItemDetailContainer

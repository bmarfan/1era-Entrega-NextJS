'use client'
import React from 'react'
import ItemCard from './ItemCard';
import { productosData } from '@/app/ProductosData'
import { useParams } from 'next/navigation';

const ItemListContainer = () => {

    const params = useParams()

    let filteredData = productosData.filter(function(item) {
        if(item.category === params.categoria){
            return item
        } if(params.categoria === 'Todo'){
            return item
        }
    })
    let a
    const media = window.matchMedia('(max-width: 768px)');
    const mediaCheck = () => {
        if(media.matches){
            a = true
        } else {
            a = false
        }
    }
    mediaCheck()
    //Para ver los cambios de resolución sin tener que actualizar la página. Uso exclusivo para el desarrollo
    media.addEventListener('change', function(){
        if(media.matches){
            document.getElementById('ItemListContainer').setAttribute('class', 'w-full h-full')
           
        } else {
            document.getElementById('ItemListContainer').setAttribute('class', 'relative')
        }
    })

  return (
    <div className={`${a ? 'w-full h-full' : ''} relative`} id='ItemListContainer'>
      <div className='bg-background2 p-3 rounded-xl'>
        <ul className='flex flex-wrap justify-around'>
            
                {
                    filteredData.map((items, index) => {
                        return <ItemCard key={index} items={items} />
                    })
                }
            
        </ul>
      </div>
    </div>
  )
}

export default ItemListContainer

import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button'
import Link from 'next/link'

const ItemCard = ({items}) => {
  return (
    <div className='p-3'>
        <Image
            src={items.imagen}
            alt={items.title}
            width={235}
            height={235}
        />
        <Link className='text-accent font-bold text-[13px]' href={'/tienda/' + items.category + '/' + items.id}>{items.title}</Link>
      <div className=''>${items.precio}</div>
      <Button texto={'Agregar al carrito'}/>
    </div>
  )
}

export default ItemCard

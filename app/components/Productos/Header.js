'use client'
import React from 'react'
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import styles from '../../styles.module.css'
import { productosData } from '@/app/ProductosData';

const Header = () => {
    const paramsRef = useParams()
    const isProduct = (product) =>{
        return product.id === paramsRef.producto
    }
    const productRef = productosData.find(isProduct)
    const paramsProdRef = paramsRef.producto


  return (
    <div className='w-full p-3 bg-accent2 text-slate-500 mt-[-8px]'>
        <Link
            className={styles.inlineLinks}
            href='/'>
                Inicio <span className='pr-[4px]'>/</span>
        </Link>
        Productos <span className='pr-[4px]'>/</span>
       <Link href={'/tienda/' + paramsRef.categoria}>
             {paramsRef.categoria} 
       </Link>
       
       <span className='px-[4px]'>/</span>
        <Link href={'/tienda/' + paramsRef.categoria + '/' + paramsRef.producto} id='hdLinkPr'>
            {
                paramsRef.producto ? (
                    `${productRef.title}`  
                ) : (
                    ` `
                )
            } 
        </Link>

    </div>
  )
}

export default Header

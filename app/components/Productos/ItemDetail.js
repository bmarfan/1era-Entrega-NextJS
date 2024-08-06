
import React from 'react'
import Image from 'next/image'
import styles from '../../styles.module.css'
import Counter from '../utilities/Counter'
import Button from '../UI/Button'
import useText from '../utilities/useText'
import TextBody from '../utilities/TextBody'
import Select from '../utilities/Select'


const ItemDetail = ({id, title, category, precio, stock, detalles, imagen, selectTitle, select, cantidad, garantia, medidas, estado, modelo}) => {

    return (
    <>
    <div className='container bg-background2 rounded-lg p-10 flex justify-around w-full'>
            <div className=''>
                <Image src={imagen} width={400} height={400} alt={title}/>
            </div>
            <div className=''>
                <h1 className='text-3xl uppercase font-extrabold text-accent border-b border-accent py-2'>{title}</h1>
                <span className='py-3 block text-accent text-base'>${precio}</span>
                <div className='flex flex-col mb-4'>
                    <span className={styles.datos}>
                        {selectTitle}
                    </span>
                    <Select title={selectTitle} value={select}/>
                    <span className={styles.datos}>Cantidad</span>
                    <Counter/>
                    <span className={styles.datos}>Stock</span>
                    {stock}
                </div>
                <div className='flex flex-col'>
                    <Button texto={'Agregar al Carrito'}></Button>
                </div>
            </div>
        </div>

        <div className='container bg-background2 rounded-lg p-10 flex w-full mt-8'>
            <div className='w-[30%] px-4 mr-5'>
                <h2 className={styles.subtitle}>Especificaciones</h2>
                <div className='flex flex-col justify-between mt-5'>
                    <div className={styles.esp1}>
                        <b>Cantidad</b>
                        <span>
                            {cantidad}
                        </span>
                    </div>
                    <div className={styles.esp2}>
                        <b>Garantía</b>
                        <span>
                            {garantia}
                        </span>
                    </div>
                    <div className={styles.esp1}>
                    <b>Medidas</b>
                        <span>
                            {medidas}
                        </span>
                    </div>
                    <div className={styles.esp2}>
                        <b>Estado</b>
                        <span>
                            {estado}
                        </span>
                    </div>
                    <div className={styles.esp1}>
                        <b>Modelo</b>
                        <span>
                            {modelo}
                            </span>
                    </div>
                    
                </div>
            </div>
            <div className='w-[70%] px-4'>
                <h2 className={styles.subtitle}>Detalles</h2>
                <div className={styles.text}>
                    <TextBody content={detalles}/>
                </div>
            </div>
        </div></>
  )
}

export default ItemDetail

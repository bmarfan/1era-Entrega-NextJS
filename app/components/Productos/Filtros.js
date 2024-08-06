import React from 'react'
import Button from '../UI/Button'
import { FilterRemove } from 'iconsax-react'
import { FilterSearch } from 'iconsax-react'
import styles from '../../styles.module.css'
const Filtros = ({show, handleClose}) => {

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
            document.getElementById('filtrosContainer').setAttribute('class', 'fixed opacity-100 z-50 inset-10 bg-background2 w-80 p-2 rounded-xl')
           
        } else {
            document.getElementById('filtrosContainer').setAttribute('class', 'relative z-30 bg-background2 w-80 p-2 rounded-xl ')
        }
    })

  return (
    <div className={`${show ? 'opacity-100 z-40 fixed inset-0 bg-black/50' : 'opacity-0 md:opacity-100'}`}>
        
        <aside className={`${a ? 'fixed opacity-100 z-50 inset-10' : 'relative z-30'} bg-background2 w-80 p-2 rounded-xl`} id='filtrosContainer'>
            <div className='absolute md:hidden' onClick={handleClose}>
                X
            </div>
            <div className={styles.subtitle}>Filtros </div>
            <div className='flex justify-around gap-2'>
                <Button texto='Limpiar' icon={<FilterRemove size={16}  variant="Bold"/>}/>
                <Button texto='Filtrar' icon={<FilterSearch size={16} variant='Bold'/>}/>
            </div>
        </aside>
    </div>
  )
}

export default Filtros

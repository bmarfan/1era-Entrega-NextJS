'use client'
import React, { useState, useEffect } from 'react'
import Filtros from './Filtros'
import Button from '../UI/Button'
import Breakpoints from 'breakpoints-js'

const Sidebar = () => {
    const [show, setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

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
            document.getElementById('FilterButton').setAttribute('class', 'relative')
           
           
        } else {
            document.getElementById('FilterButton').setAttribute('class', 'hidden')
          
        }
    })

  return (
    <div>

         <div onClick={handleOpen} id='FilterButton' className={`${a ? 'relative' : 'hidden'} ${show ? 'z-0' : 'z-50'} w-20`}>
            <Button texto='Filtrar'/>
        </div>
    <Filtros show={show} handleClose={handleClose}/>
    </div>
    
  )
}

export default Sidebar

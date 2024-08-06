import React from 'react'
import styles from '../../styles.module.css'

const MenuDropdown = ({submenus, open}) => {
  return (
    <div className={`${open ? 'opacity-100 fixed inset-x-0 bg-black/50 z-40 h-full top-20' : 'opacity-0 md:opacity-100'}`}>
        <div className='fixed bg-background2 top-20 h-full right-0'>
      <ul className={`${open ? 'block' : 'hidden'} p-5 flex flex-col w-80`}>
        {submenus.map((submenu, index) => (
            <li key={index} className={`${styles.button}`}>
                <a href={submenu.url}>{submenu.title}</a>
            </li>
        ))}
      </ul>
    </div>
    </div>
  ) 
}

export default MenuDropdown

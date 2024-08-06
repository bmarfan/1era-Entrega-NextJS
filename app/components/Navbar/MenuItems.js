'use client'
import { useState, useEffect, useRef } from "react";
import MenuDropdown from './MenuDropdown'
import styles from '../../styles.module.css'
import { ArrowSquareDown } from 'iconsax-react'

const MenuItems = ({items, depthLevel}) => {
    const [open, setOpen] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (open && ref.current && !ref.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [open])

  return (
    <div>
      <li className={styles.button} ref={ref}>
        {items.submenu ? (
            <>
                <button 
                    type='button' 
                    aria-haspopup='menu'
                    aria-expanded={open ?  'true' : 'false'}
                    onClick={() => setOpen((prev) => !prev)}
                    className='flex items-center'
                >
                    {items.title}{''}
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className='pl-1'><ArrowSquareDown size={13}/></span>}
                </button>
                <MenuDropdown 
                    submenus={items.submenu}
                    open={open}
                    depthLevel={depthLevel}
                />
            </>
        ) : (
            <a href={items.url}>{items.title}</a>
        )}
      </li>
    </div>
  )
}

export default MenuItems

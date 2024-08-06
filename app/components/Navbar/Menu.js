import React from 'react'
import { menuItemsData } from '../../MenuItemsData'
import MenuItems from './MenuItems'

const Menu = () => {
    const depthLevel = 0;
  return (
    <div>
        <ul className='flex'>
            {menuItemsData.map((menu, index) => {
                return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            })}
        </ul>
      
    </div>
  )
}

export default Menu


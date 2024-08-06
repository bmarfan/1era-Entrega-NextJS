'use client'
import React from 'react'
import { menuItemsData } from '@/app/MenuItemsData'
import IndexMenuItem from './IndexMenuItem'

const IndexMenu = () => {
    let categories = menuItemsData.filter(function(item) {
        return item.submenu
    })
  return (
    <div className='flex justify-center'>
        {categories.map((menu, index) => {
                return(
                    <div key={index} className='pb-5 container'>
                        {
                            menu.submenu ? (
                                <IndexMenuItem items={menu.submenu}/>
                            ) : ('')
                        }
                    </div>
                )
            })}
      </div>
  )
}

export default IndexMenu

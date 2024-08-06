import React from 'react'
import styles from '../../styles.module.css'

const Select = ({title, value}) => {
  if(title != ''){
    return (
        <>
            <select className={styles.select} required>
                <option value=''>{title}</option>
                {
                    value?.map((value, index) => {
                                    return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>
        </>
      )
  }
}

export default Select

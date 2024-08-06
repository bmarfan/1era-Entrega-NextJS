import React from 'react'
import styles from '../../styles.module.css'

const Button = ({texto, icon}) => {
  return (
    <button type='button' className={styles.buttonType2}>
        {icon}
        {texto}
    </button>
  )
}

export default Button

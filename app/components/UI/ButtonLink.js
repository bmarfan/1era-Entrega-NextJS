import React from 'react'
import styles from '../../styles.module.css'
import Link from 'next/link'

const ButtonLink = ({texto, icon, url}) => {
    return (
        <button type='button' className={styles.buttonType2}>
            <Link href={url}>
                {icon}
                {texto}
            </Link>
        </button>
      )
}

export default ButtonLink

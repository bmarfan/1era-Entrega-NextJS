import React from 'react'
import styles from '../../styles.module.css'

export default function useText({content}) {
  return (
    <div>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

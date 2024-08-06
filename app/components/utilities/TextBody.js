import React from 'react'
import styles from '../../styles.module.css'

const TextBody = ({content}) => {
  return (
    <div>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default TextBody

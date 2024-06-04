import React from 'react'
import styles from '../Avatar/Avatar.module.css'
// Hermes - desestruturação
export default function Avatar({hasBorder = true, src}) {


  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}  />

  )
}

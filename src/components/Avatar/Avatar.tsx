import React from 'react'
import styles from '../Avatar/Avatar.module.css'
import { AvatarProps } from './AvatarProps'

export default function Avatar({hasBorder = true, ...props}: AvatarProps) {

  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
  )
}

import React from 'react'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import Avatar from '../Avatar/Avatar'

export default function Sidebar() {
  return (
  <aside className={styles.sidebar}>  
    <img className={styles.cover} src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fG1vbml0b3J8ZW58MHx8fHwxNzAwOTYxOTY5fDA&ixlib=rb-4.0.3&q=50&w=500"/>

     <div className={styles.profile}>
      <Avatar src='https://github.com/miguelcutri.png'/>
      <strong>Miguel Cutri</strong>
      <span>Software Engineer</span>
     </div>

     <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
     </footer>
  </aside>
  )
}

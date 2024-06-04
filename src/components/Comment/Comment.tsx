import React from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from '../Avatar/Avatar'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'https://github.com/miguelcutri.png'} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Miguel Cutri</strong>
              <time title='11 de Maio as 11:40' dateTime="2024-05-28">Publicado há 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>

          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>3</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

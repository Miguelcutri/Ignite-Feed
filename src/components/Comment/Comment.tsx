import React, { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from '../Avatar/Avatar'

export default function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(event) {
    event.preventDefault()
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => state +1 )
  }

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
            <button type='button' onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash type="button" size={20}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
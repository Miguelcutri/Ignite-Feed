import React from 'react'
import styles from './Post.module.css'
import Comment  from '../Comment/Comment'
import Avatar from '../Avatar/Avatar'

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png"/>
          <div className={styles.authorInfo}>
            <strong>Miguel Cutri</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time title='11 de Maio as 11:40' dateTime="2024-05-28">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p> Nullam nec purus quis sapien tincidunt vehicula.
          Donec eget sapien nec nunc luctus ultricies.
        </p>
        <p> Nullam et arcu vitae nunc luctus ultricies. 
          Nullam et arcu vitae.
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Seu comentário"/>
        <footer>
        <button type='submit' >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

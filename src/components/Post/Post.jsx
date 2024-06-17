import React, {  useState } from 'react'
import styles from './Post.module.css'
import Comment from '../Comment/Comment'
import Avatar from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'

export default function Post({author, publishedAt, content}) {  
  const publishedDateFormatted = format(new Date(publishedAt), 'dd/MM/yyyy HH:mm')
  const publishedDateRelativeNow = formatDistanceToNow(new Date(publishedAt), { addSuffix: true })
  const [comments, setComments] = useState(['Post muito bom!', 'Parabéns!'])
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
    event.yarge.setCustomValidity('')
  }


  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Por favor, preencha este campo.');
}

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  // Hermes 12:20 validando formulário - 3
  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted}>{publishedDateRelativeNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea value={newCommentText} onChange={handleNewCommentChange} name="comment" placeholder="Seu comentário"
        required
        onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
import React, { useState } from 'react';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from '../Avatar/Avatar';
import { CommentProps } from './CommentProps';

export default function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(event: React.MouseEvent) {
    event.preventDefault();
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={'https://github.com/miguelcutri.png'} alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Miguel Cutri</strong>
              <time title='May 11 at 11:40' dateTime="2024-05-28">Published 1h ago</time>
            </div>
            <button type='button' onClick={handleDeleteComment} title='Delete comment'>
              <Trash type="button" size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

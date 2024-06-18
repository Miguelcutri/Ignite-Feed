import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './Post.module.css';
import Comment from '../Comment/Comment';
import Avatar from '../Avatar/Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { PostProps } from './PostProps';

export default function Post({ post }: PostProps) {
  const publishedDateFormatted = format(new Date(post.publishedAt), 'dd/MM/yyyy HH:mm');
  const publishedDateRelativeNow = formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true });
  const [comments, setComments] = useState(['Great post!', 'Congratulations!']);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
    event?.target.setCustomValidity('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Please fill out this field.');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} alt='' hasBorder={false} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted}>{publishedDateRelativeNow}</time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea value={newCommentText} onChange={handleNewCommentChange} name="comment" placeholder="Your comment"
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publish</button>
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
  );
}
import React from 'react'
import styles from '../../src/Post.module.css'

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import DOMPurify from 'dompurify'

//author: [avatar_url = "", name= "", role: ""]
//publish: Date
//content

const comments = [
  1,
  2,

];


export function Post({author, publishedAt, content}){

  const [comments, setComments] = useState([
    'Post, interessante!'
  ])

  const [newComment, setNewComment] = useState('')
    
    const publishedDateFormat= format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
      
    })

    function handleCreateNewComment(){
        event.preventDefault()
        const  newCommentText = event.target.comment.value

        setComments([...comments, newCommentText]);

        setNewCommentText('');

    }

    function handleNewCommentChange(){
      event.target.setCustomValidity('')
      setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
      const commentWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete;
      })
      
      setComments(commentWithoutDeleteOne);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newComment.length === 0;

    return(
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
              <Avatar src={author.avatarUrl}/>
              <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
              </div>
          </div>

          <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu Feedback</strong>

          <textarea 
          placeholder='Deixe seu comentário'
          name='comment'
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required={true}
          />
          <footer>
              <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
          </footer>
      </form>
      <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment 
              content={comment} 
              key={comment} 
              deleteComment={deleteComment}
              
            />
          })}
      </div>
    </article>
  )
}


/*
Default exports:


Named exports:
*/
import React from 'react'

import styles from '../../src/Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
          <div className={styles.author}>
              <Avatar src='https://github.com/Denilson-B-Sousa.png'/>
              <div className={styles.authorInfo}>
                  <strong>Denilson</strong>
                  <span>Web Developer</span>
              </div>
          </div>

          <time title="06 de Março às 10:22" dateTime='2023-03-06 10:22:30'>Publicado há 1 mês</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="#">👉 jane.design/doctorcare</a></p>
            <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
          </p>
      </div>

      <form className={styles.commentForm}>
          <strong>Deixe seu Feedback</strong>

          <textarea placeholder='Deixe seu comentário'>

          </textarea>
          <footer>
              <button type='submit'>Publicar</button>
          </footer>
      </form>
      <div className={styles.commentList}>
          <Comment/>
          <Comment/>
          <Comment/>
      </div>
    </article>
  )
}


/*
Default exports:


Named exports:
*/
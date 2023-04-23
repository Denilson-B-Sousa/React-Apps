import { useState } from 'react'

import './css/global.css'
import { Header } from './components/Header'
import { Post } from './components/Posts'
import styles from './App.module.css'
import { SideBar } from './components/SideBar'


//author: [avatar_url = "", name= "", role: ""]
//publish: Date
//content
// Iteração --> repetir alguma coisa (iterar o array = percorrer o array e retornar alguma coisa)
function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/Denilson-B-Sousa.png',
        name: 'Denilson',
        role: 'Desenvolvedor Front-end'
      },
      
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉 jane.design/doctorcare'},
        {type: 'link', content: '#novoprojeto #nlw #rocketseat'}
      ],
      publishedAt: new Date('2022-05-03 20:30:00'),

    },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO RocketSeat'
    },
    
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '<a href="#">👉 jane.design/doctorcare</a>'},
      {type: 'link', content: '<a href="#">#novoprojeto #nlw #rocketseat</a>'}
    ],

    publishedAt: new Date('2022-05-10 20:30:00'),
  },
];


  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.wrapper}>
              <SideBar/>
        
            <main>
              {posts.map(post => {
                 return (
                 <Post
                    key={post.author.name}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                 />
                 )
              })}
            </main>
        </div>
    </div>
  )
}

export default App


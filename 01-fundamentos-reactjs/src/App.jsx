import { useState } from 'react'

import './css/global.css'
import { Header } from './components/Header'
import { Post } from './components/Posts'
import styles from './App.module.css'
import { SideBar } from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.wrapper}>
              <SideBar/>
        
            <main>
              <Post
                author="Denilson"
                content="Lorem ipsum dolor sit anct conseucter"
              />
              <Post
                author="Dev"
                content="Novo post"
              />
            </main>
        </div>
    </div>
  )
}

export default App


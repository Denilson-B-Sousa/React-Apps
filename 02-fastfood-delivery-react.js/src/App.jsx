
import './App.module.css'
import { Header } from './components/header'
import { LandingPage } from './components/LandingPage'
import styles from './App.module.css'
function App() {

  return (
    <div className={styles.container}>
        <Header/>
        <LandingPage/>
    </div>
  )
}

export default App

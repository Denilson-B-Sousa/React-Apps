
import './App.module.css'
import { Brand } from './components/Brand'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'

function App() {

  return (
    <div className="App">
        <Header/>
        <LandingPage/>
        <Brand/>
        
    </div>
  )
}

export default App

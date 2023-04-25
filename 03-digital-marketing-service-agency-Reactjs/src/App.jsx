
import './App.module.css'
import { Brands } from './components/Brands'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'

function App() {

  return (
    <div className="App">
        <Header/>
        <LandingPage/>
        <Brands/>
        
    </div>
  )
}

export default App

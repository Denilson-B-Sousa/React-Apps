import './App.css'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import {BrowserRouter } from 'react-router-dom'
function App() {

  return (
 
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        <Button variant="primary"/>
        <Button variant="secondary"/>
        <Button variant="danger"/>
        <Button variant="success"/>

        <GlobalStyle/>
      </ThemeProvider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
/*Integração do React com a DOM(Document Object Model) */
import App from './App'
import './css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)/*Elemento raiz do nosso html, toda interface é construída 
partir do javascript 

render --> renderizando(mostrando em tela) o conteúdo do arquivo 
app

JSX --> Javascript + xml
*/

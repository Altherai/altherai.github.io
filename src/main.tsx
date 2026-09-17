import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

const restoredPath = sessionStorage.getItem('altherai:spa-path')
if (restoredPath) {
  sessionStorage.removeItem('altherai:spa-path')
  window.history.replaceState(null, '', restoredPath)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

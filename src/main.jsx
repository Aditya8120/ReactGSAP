import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Stairs from './components/Stairs'

createRoot(document.getElementById('root')).render(

    <HashRouter>
    <Stairs>
    <App />
    </Stairs>    
    </HashRouter>
  ,
)

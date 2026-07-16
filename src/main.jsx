import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import Storecontextprovider from './Context/Storecontext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Storecontextprovider>
        <App />

    </Storecontextprovider>
    
    </BrowserRouter>
  </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={Store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
)

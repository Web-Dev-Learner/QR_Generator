import React from 'react'
import ReactDOM from 'react-dom/client'
import { QrCode } from './components/QrCode'
import "./components/QrCode.css";
//import App from './App.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <QrCode/>
  </React.StrictMode>,
)

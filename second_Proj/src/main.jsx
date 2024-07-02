import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const anotherEle = React.createElement(
//   'a',
//   {href:'https://facebook.com' , target:"_blank"},
//   'facebook.com'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <App />
    </React.StrictMode>
)

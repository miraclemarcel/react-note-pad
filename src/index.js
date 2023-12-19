
// This is where i am going to link the app component to the <div> with 
// the id of 'root' in the index.html, inside the public folder.

import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root')) //Linked to the root id
root.render(<App />)   //component that is going to be rendered inside the root


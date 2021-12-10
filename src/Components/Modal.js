import React from 'react'
import ReactDOM from 'react-dom'
import '../Styles/body.css'

function Modal() {
    return  ReactDOM.createPortal(
        <div>
         <div className="overlay"></div>
         <div className="modal-content">
             <h1>Hello</h1>
         </div>
        </div>
       ,document.getElementById('modal-root'));
}

export default Modal

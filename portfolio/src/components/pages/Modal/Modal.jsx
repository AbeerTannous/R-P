import React from 'react'

function Modal({onClose,currentProject}) {
    const {name,live,github,description,screenshot}=currentProject;


  return (
    <div className='m'>
        <div className='m-con'>
        <h3 className='m-title'>{name}</h3>
        <p className='p-description'>{description}</p>
        <button className='m-btn' onClick={onClose} type="button">Close</button>
        </div>
    </div>
  )
}

export default Modal
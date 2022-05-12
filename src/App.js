import Button from './shared/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import './custom.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openClick = e => {
    e.preventDefault()
    setIsOpen(true)
  }
  const closeClick = () => {
    setIsOpen(false)
  }
  return (
    <div className='container'>
      <h1>Modals with bootstrap! </h1>
      <Button type={'button'} openClick={openClick} styles={'primary'}></Button>
      <Modal show={isOpen} onHide={closeClick}>
        <Modal.Header closeButton>
          <Modal.Title>Testing out Bootstrap with React</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a test, this is only a test and it's pretty sweet that its this easy to create a modal!</Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
      </Modal>
    </div>
  )
}

export default App

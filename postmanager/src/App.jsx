import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'

const App = () => {
  let [modal, setModal] = useState(null)

  return (
    <>
      <div className='min-h-screen bg-[#faf9f6] font-serif' style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        <Navbar setModal={setModal} />
        {modal && <Form setModal={setModal} modal={modal} />}
      </div>
    </>
  )
}

export default App
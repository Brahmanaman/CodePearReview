import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card';

const App = () => {
  let [modal, setModal] = useState(null)
  let [post, setPost] = useState({
    id: "",
    title: "",
    category: "",
    date: "",
    body: ""
  })
  let [posts, setPosts] = useState([])

  return (
    <>
      <div className='min-h-screen bg-[#faf9f6] font-serif' style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        <Navbar setModal={setModal} />
        {modal && <Form setModal={setModal} modal={modal} setPost={setPost} post={post} setPosts={setPosts} posts={posts} />}
        <main className='max-w-350 px-6 py-10 mx-auto'>
          <Card posts={posts} setPosts={setPosts} setPost={setPost} post={post} setModal={setModal} />
        </main>
      </div>
    </>
  )
}

export default App

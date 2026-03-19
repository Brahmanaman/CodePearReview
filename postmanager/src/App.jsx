import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card';


const INITIAL_POSTS = [
  {
    id: 1,
    title: "The Art of Slowing Down",
    category: "Philosophy",
    date: "Mar 14, 2026",
    body: "In a world that rewards velocity, the radical act is stillness. We confuse motion with progress — but the deepest work often happens when we stop, look, and let thought arrive on its own terms.",
  },
  {
    id: 2,
    title: "On Building Things That Last",
    category: "Craft",
    date: "Mar 17, 2026",
    body: "Durability is a form of honesty. When we build something meant to endure, we are forced to reckon with its foundations — the choices that won't be forgiven by time. Shortcuts collapse; integrity compounds.",
  },
  {
    id: 3,
    title: "Margins & Meaning",
    category: "Design",
    date: "Mar 19, 2026",
    body: "Negative space is not absence — it is permission. The white margin on a page, the pause in conversation, the gap between elements: these are where meaning breathes. Design without rest is noise.",
  },
];


const App = () => {
  let [modal, setModal] = useState(null)
  let [post, setPost] = useState({
    id: "",
    title: "",
    category: "",
    date: "",
    body: ""
  })
  let [posts, setPosts] = useState(INITIAL_POSTS)

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
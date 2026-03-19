
import { useState } from 'react';
import uniqid from 'uniqid';
const CATEGORIES = ["Philosophy", "Craft", "Design", "Technology", "Life", "Other"];
const Form = ({ setModal, modal, setPost, post, setPosts, posts }) => {
    let [errors, setErrors] = useState({})
    const handleForm = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const validateFields = () => {
        let error = {}
        if (!post.title.trim()) setErrors(error.title = "Title is required")
        if (!post.category.trim()) setErrors(error.category = "Category is required")
        if (!post.body.trim()) setErrors(error.body = "Description is required")
        setErrors(error);
        return Object.keys(error).length === 0;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateFields()) return;
        
        if (modal === "edit") {
            // Update existing post
            setPosts(posts.map((p) => p.id === post.id ? post : p))
        } else {
            // Create new post
            setPosts([...posts, { ...post, id: uniqid(), date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }])
        }
        
        setErrors({})
        setPost({
            id: "",
            title: "",
            category: "",
            date: "",
            body: ""
        })
        setModal();
    }
    return (
        <>
            <div className='flex items-center justify-center z-50 fixed inset-0'>
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
                <div className='max-w-4xl w-full bg-white shadow-2xl z-100' style={{ fontFamily: "system-ui, sans-serif" }}>
                    <div className='flex items-center justify-between px-8 py-5 border-b border-stone-200 '>
                        <h2 className='font-bold text-stone-900 font-serif tracking-tight'>{modal === "create" ? "New Entry" : "Edit Entry"}</h2>
                        <button onClick={() => { setModal() }} className='text-stone-400 text-md hover:text-stone-700 cursor-pointer'>x</button>
                    </div>

                    <div className='px-8 py-6 space-y-5 border-b border-stone-200'>
                        <div>
                            <p className='uppercase font-semibold text-stone-400 text-sm tracking-wider mb-1'>Title</p>
                            <input type="text" id="title" name="title" placeholder='Enter a title...' value={post.title} onChange={handleForm} className='border border-stone-200 w-full px-4 py-2.5 text-stone-900 text-sm placeholder-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-900 transition ' />
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                        </div>

                        <div>
                            <p className='uppercase font-semibold text-stone-400 text-sm tracking-wider mb-1'>Category</p>
                            <select id="category" name="category" value={post.category} onChange={handleForm} className='border border-stone-200 w-full px-4 py-2.5 text-stone-900 text-sm placeholder-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-900 transition '>
                                <option id="" value="" selected className='text-stone-500'>Select a category</option>
                                {
                                    CATEGORIES.map((category) => {
                                        return <option id={category}>{category}</option>
                                    })
                                }
                            </select>
                            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                        </div>

                        <div>
                            <p className='uppercase font-semibold text-stone-400 text-sm tracking-wider mb-1'>Category</p>
                            <textarea type="text" id="body" name="body" rows={5} placeholder='Write something worth keeping…' value={post.body} onChange={handleForm} className='border border-stone-200 w-full px-4 py-2.5 text-stone-900 text-sm placeholder-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-900 transition resize-none' />
                            {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body}</p>}
                        </div>
                    </div>

                    <div className='px-8 py-6 flex items-center justify-end gap-5'>
                        <button onClick={() => { setModal() }} className='flex items-center justify-center text-sm tracking-wider bg-gray-200 text-stone-900 md:py-2 md:px-5 py-1 px-2 font-semibold cursor-pointer hover:bg-gray-300 active:scale-96 transition-all duration-200'>Cancel</button>
                        <button onClick={handleSubmit} className='flex items-center justify-center text-sm tracking-wider bg-stone-900 text-white md:py-2 md:px-5 py-1 px-2 cursor-pointer hover:bg-stone-800 active:scale-96 transition-all duration-200'>{modal === "create" ? "Add" : "Update"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
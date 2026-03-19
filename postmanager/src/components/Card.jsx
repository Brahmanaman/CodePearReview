import React from 'react'
const categoryColor = (cat) => {
    const map = {
        Philosophy: "bg-amber-100 text-amber-800",
        Craft: "bg-stone-100 text-stone-700",
        Design: "bg-sky-100 text-sky-800",
        Technology: "bg-emerald-100 text-emerald-800",
        Life: "bg-rose-100 text-rose-800",
        Other: "bg-purple-100 text-purple-800",
    };
    return map[cat] || "bg-gray-100 text-gray-700";
};

const Card = ({ posts, setPosts, setPost, setModal }) => {
    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id != id))
    }

    const updatePost = (id) => {
        setPost(posts.find((post) => post.id == id))
        setModal("edit")
    }
    return (
        <>
            {posts.length === 0 ?
                <div className="text-center py-32 text-stone-400">
                    <p className="text-6xl mb-4">📄</p>
                    <p className="italic text-xl">Nothing written yet.</p>
                    <p className="text-sm mt-2" style={{ fontFamily: "system-ui, sans-serif" }}>
                        Start by creating your first post.
                    </p>
                </div>
                :
                <div>
                    {
                        posts.map((post) => {
                            return <div className="group border-stone-200 border-b " key={post.id}>
                                <div className='space-y-4 py-8'>
                                    <div className='flex items-center gap-3 mb-3' style={{ fontFamily: "system-ui, sans-serif" }}>
                                        <span className={`text-xs font-medium tracking-wide py-1 px-2 ${categoryColor(post.category)}`}>{post.category}</span>
                                        <span className='text-xs text-stone-400' >{post.date}</span>
                                    </div>
                                    <h2 className='text-3xl text-stone-950 font-bold mb-3 leading-tight tracking-tight'>{post.title}</h2>
                                    <p className='text-stone-600 tracking-wide'>{post.body}</p>

                                    <div className='flex items-center gap-4 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200' style={{ fontFamily: "system-ui, sans-serif" }}>
                                        <button onClick={() => updatePost(post.id)} className='text-xs text-stone-500 hover:text-stone-900 transition-colors cursor-pointer'> ✏️ Edit</button>
                                        <button onClick={() => deletePost(post.id)} className='text-xs text-red-400 hover:text-red-600 cursor-pointer'> ❌ <span className='text-red-500'>Delete</span></button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            }

        </>
    )
}

export default Card
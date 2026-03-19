import React from 'react'

const Navbar = ({ setModal }) => {
    return (
        <>
            <header className='border-b border-stone-200 bg-white'>
                <div className='max-w-350 px-6 py-10 mx-auto flex md:items-center justify-between flex-col md:flex-row'>
                    <div>
                        <p className='uppercase text-xs text-stone-400 tracking-tight md:mb-1'>The Daily</p>
                        <p className='text-[30px] md:text-5xl  font-bold text-stone-900 tracking-tight md:mb-2'>Commonplace</p>
                        <p className='text-sm md:text-[16px] text-stone-400 tracking-tight italic'>3 entries recorded</p>
                    </div>
                    <div className='self-end'>
                        <button onClick={() => setModal('create')} className='flex items-center justify-center text-sm tracking-wider bg-stone-900 text-white md:py-2 md:px-5 py-1 px-2 cursor-pointer hover:bg-stone-800 active:scale-96 transition-all duration-200' style={{ fontFamily: "system-ui, sans-serif" }}> + New Post</button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Navbar
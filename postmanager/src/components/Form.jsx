
const Form = ({ setModal, modal }) => {
    return (
        <>
            <div className='flex items-center justify-center z-50 fixed inset-0'>
                <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
                <div className='max-w-4xl w-full bg-white shadow-2xl z-100' style={{ fontFamily: "system-ui, sans-serif" }}>
                    <div className='flex items-center justify-between px-8 py-5 border-b border-stone-200 '>
                        <h2 className='font-bold text-stone-900 font-serif tracking-tight'>New Entry</h2>
                        <button onClick={() => { setModal() }} className='text-stone-400 text-md hover:text-stone-700 cursor-pointer'>x</button>
                    </div>

                    <div className='px-8 py-6 space-y-5 border-b border-stone-200'>
                        <div>
                            <p className='uppercase font-semibold text-stone-400 text-sm tracking-wider mb-1'>Title</p>
                            <input type="text" placeholder='Enter a title...' className='border border-stone-200 w-full px-4 py-2.5 text-stone-900 text-sm placeholder-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-900 transition ' />
                        </div>

                        <div>
                            <p className='uppercase font-semibold text-stone-400 text-sm tracking-wider mb-1'>Category</p>
                            <input type="text" placeholder='Enter a title...' className='border border-stone-200 w-full px-4 py-2.5 text-stone-900 text-sm placeholder-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-900 transition ' />
                        </div>

                        <div>
                            <p className='uppercase font-semibold text-stone-400 text-sm tracking-wider mb-1'>Category</p>
                            <textarea type="text" rows={5} placeholder='Write something worth keeping…' className='border border-stone-200 w-full px-4 py-2.5 text-stone-900 text-sm placeholder-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-900 transition resize-none' />
                        </div>
                    </div>

                    <div className='px-8 py-6 flex items-center justify-end gap-5'>
                        <button onClick={() => { setModal() }} className='flex items-center justify-center text-sm tracking-wider bg-gray-200 text-stone-900 md:py-2 md:px-5 py-1 px-2 font-semibold cursor-pointer hover:bg-gray-300 active:scale-96 transition-all duration-200'>Cancel</button>
                        <button className='flex items-center justify-center text-sm tracking-wider bg-stone-900 text-white md:py-2 md:px-5 py-1 px-2 cursor-pointer hover:bg-stone-800 active:scale-96 transition-all duration-200'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
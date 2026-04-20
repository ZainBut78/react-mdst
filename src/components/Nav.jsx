import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    Link
    return (
        <div>
            <div className='w-full flex items-center justify-center p-2 border-b'>
                <h1 className='text-xl font-semibold'>COMMING SOON</h1>
            </div>
            <div className='p-4 flex items-center justify-center'>
                <img className='h-[100px]' src="images/logo.webp" alt="logo" />

            </div>
            <div className='flex items-center justify-center gap-3 text-2xl'>
                <Link className='hover:underline' to='/' >Home</Link>
                <Link className='hover:underline'  to='/about' >About Us</Link>
            </div>
        </div>
    )
}

export default Nav
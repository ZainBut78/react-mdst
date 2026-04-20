import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <div className='px-10 mx-15 mt-10'>
                    <input className=' mx-3 border-2 border-gray-200 rounded h-[40px] w-[300px] ' type="text" placeholder='Enter Your Email' />
                    <button className="mx-3 sm:h-[45px] sm:w-[100px] h-[40px] w-[300px] bg-black text-white rounded font-medium hover:bg-gray-900 transition-all active:scale-95">
                        Subscribe
                    </button>
                </div>
                <div className='flex px-15 mt-2 gap-2'>
                    <img className='h-5 w-5' src="images/facebook.png" alt="facebook" />
                    <img className='h-5 w-5' src="images/instagram.png" alt="insta" />
                    <img className='h-5 w-5' src="images/tik-tok.png" alt="tiktok" />
                </div>
            </div>
            <hr className='m-10' />
            <div className='flex items-center justify-center mb-5 p-3'>
                <p>2025, MDST Market ·28 Church Street, Winchester, MA 01890 · hello@mdstmarket.com Privacy policy</p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'

const Section1 = () => {
  return (
    <div>
         <div className='flex flex-col sm:flex-row items-center justify-center py-15 gap-4'>
        <img className='w-full sm:w-80 md:w-auto md:h-72 object-cover' src="/src/images/tv.webp" alt="tv" />
        <img className='w-full sm:w-80 md:w-auto md:h-72 object-cover' src="/src/images/paper.jpg" alt="paper" />
      </div>
    </div>
  )
}

export default Section1
import React from 'react'

const Feedback = () => {
  return (
    <div className='p-5 md:p-10'>
      <h2 className='text-2xl md:text-3xl font-bold text-[#6B8A7A] my-2'>Congratssss!✨</h2>
      <h3 className='text-lg md:text-xl font-bold'>Here is your Overall <span className='bg-[#6B8A7A] text-white rounded-md p-1'>Interview</span> Report</h3>
      <p className='text-[#254336] text-md md:text-lg my-3'>Your Overall Interview Rating is <strong>7</strong></p>
      
      <h2 className='text-xl md:text-2xl font-bold text-[#686D76]'>Below are your interview questions....</h2>
      
      {/* Add a responsive layout for questions here */}
    </div>
  )
}

export default Feedback
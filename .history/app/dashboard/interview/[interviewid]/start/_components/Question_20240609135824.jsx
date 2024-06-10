import React from 'react'

const Question = ({interviewQuestion,activeIndex}) => {
  return (
    <div className='p-5 border rounded-lg'>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
    {interviewQuestion && interviewQuestion.map((Question,index)=>(
        <h2 className={`p-2 rounded-full bg-[#F5F5F4] text-xs md:text-sm text-center font-bold ${activeIndex==index && 'bg-blue-600 text-white'}`}>Question #{index+1}</h2>
    ))}
    </div>
    </div>
  )
}

export default Question
import React from 'react'

const Question = ({interviewQuestion}) => {
  return (
    <div className='p-5 border rounded-lg'>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
    {interviewQuestion && interviewQuestion.map((Question,index)=>(
        <h2 className='p-2 rounded-full bg-[#F5F5F4]'>Question #{index+1}</h2>
    ))}
    </div>
    </div>
  )
}

export default Question
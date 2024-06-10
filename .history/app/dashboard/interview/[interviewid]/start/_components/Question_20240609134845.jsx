import React from 'react'

const Question = ({interviewQuestion}) => {
  return (
    <div className='p-5 border rounded-lg'>
    {interviewQuestion && interviewQuestion.map((Question,index)=>(
        <h2 className='p-2 rounded-full bg-[##F5F5F4]'>Question #{index+1}</h2>
    ))}
    </div>
  )
}

export default Question
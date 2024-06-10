"use client"
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { db } from '../../../../../utils/db'
import { userAnswer } from '../../../../../utils/schema'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../@/components/ui/collapsible"


const Feedback = ({ params }) => {
  const [userFeedback, setUserFeedback] = useState([])

  useEffect(() => {
    Getresult()
  }, [])

  const Getresult = async () => {
    const result = await db.select()
      .from(userAnswer)
      .where(eq(userAnswer.MockidRef, params.interviewid))
      .orderBy(userAnswer.id)

    console.log(result)
    setUserFeedback(result)
  }

  return (
    <div className='p-5 md:p-10'>
      <h2 className='text-2xl md:text-3xl font-bold text-[#6B8A7A] my-2'>Congratssss!✨</h2>
      <h3 className='text-lg md:text-xl font-bold'>Here is your Overall <span className='bg-[#6B8A7A] text-white rounded-md p-1'>Interview</span> Report</h3>
      <p className='text-[#254336] text-md md:text-lg my-3'>Your Overall Interview Rating is <strong>{7}</strong></p>
      
      <h2 className='text-xl md:text-2xl font-bold text-[#686D76]'>Below are your interview questions....</h2>
      
      {/* <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
        {userFeedback.map((feedback, index) => (
          <div key={index} className='p-4 bg-gray-100 rounded-md shadow-sm'>
            <h4 className='text-lg md:text-xl font-semibold text-[#254336]'>Question {index + 1}: {feedback.question}</h4>
            <p className='text-md md:text-lg text-[#254336]'><strong>Your Answer:</strong> {feedback.useranswer}</p>
            <p className='text-md md:text-lg text-[#254336]'><strong>Correct Answer:</strong> {feedback.correctAns}</p>
            <p className='text-md md:text-lg text-[#254336]'><strong>Feedback:</strong> {feedback.feedback}</p>
            <p className='text-md md:text-lg text-[#254336]'><strong>Rating:</strong> {feedback.rating}</p>
          </div>
        ))}
      </div> */}

  <Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>

    </div>
  )
}

export default Feedback

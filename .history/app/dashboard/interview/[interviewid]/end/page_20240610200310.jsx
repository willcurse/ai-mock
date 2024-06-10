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
      <p className='text-[#254336] text-md md:text-lg my-3'>Your Overall Interview Rating is <strong>7</strong></p>
      
      <h2 className='text-xl md:text-2xl font-bold text-[#686D76]'>Below are your interview questions....</h2>
      
      <div className='mt-5'>
        {userFeedback.map((feedback, index) => (
          <Collapsible key={index} className="border-b border-gray-200 mb-4">
            <CollapsibleTrigger className="text-left w-full p-4 text-lg font-semibold bg-gray-100 rounded-t-md">
              Question {index + 1}: {feedback.question}
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 bg-white rounded-b-md">
              <div className='space-y-2'>
                <p><strong>Rating:</strong> {feedback.rating}</p>
                <p className='bg-red-100 w-full p-4 rounded-t-md' ><strong>Your Answer:</strong> {feedback.useranswer}</p>
                <p><strong>Correct Answer:</strong> {feedback.correctAns}</p>
                <p><strong>Feedback:</strong> {feedback.feedback}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

export default Feedback

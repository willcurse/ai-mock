"use client";
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
// import { mySchemaUsers } from '../../../../utils/schema';
import {mySchemaUsers} from '../../../../../utils/schema'
import { db } from '/utils/db';
import Question from './_components/Question'
import AudioVideo from './_components/AudioVideo'

const Start = ({params}) => {

    const [interviewData, setInterviewData] = useState();
    const [interviewQuestion,setInterviewQuestion]=useState()

    useEffect(()=>{
        getInterviewDetails()
    },[])

    const getInterviewDetails = async () => {
        const result = await db.select().from(mySchemaUsers)
          .where(eq(mySchemaUsers.Mockid, params.interviewid));
        
          const jsonMockResp= JSON.parse(result[0].jsonMockResp)
          console.log(jsonMockResp)
          setInterviewQuestion(jsonMockResp)
          setInterviewData(result[0])
      };
    

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Questions */}
        
        <Question interviewQuestion={interviewQuestion} />
        {/* video/audio */}
        <AudioVideo />

        </div>
    </div>
  )
}

export default Start
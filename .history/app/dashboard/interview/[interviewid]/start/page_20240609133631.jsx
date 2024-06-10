"use client";
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { mySchemaUsers } from '../../../../utils/schema';
import { db } from '/utils/db';

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
    <div>Start</div>
  )
}

export default Start
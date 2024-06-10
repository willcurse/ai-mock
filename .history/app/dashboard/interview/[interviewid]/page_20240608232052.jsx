"use client"
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { mySchemaUsers } from '../../../../utils/schema';
import { db } from '/utils/db';

const Interview = ({params}) => {

    const[InterviewData,setInterviewData]=useState()
    useEffect(()=>{
        console.log(params.interviewid)
        GetInterviewDetails()
    },[])

    const GetInterviewDetails = async()=>{
        const result=await db.select().from(mySchemaUsers)
        .where(eq(mySchemaUsers.Mockid,params.interviewid))
       setInterviewData(result[0])
    }
  return (
    <div className='my-10' >
    <h1 className='font-bold text-2xl text-[#6B8A7A]' > Let's Start Your Interview </h1>
    </div>
  )
}

export default Interview
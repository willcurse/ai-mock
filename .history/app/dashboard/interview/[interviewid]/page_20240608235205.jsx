"use client"
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { mySchemaUsers } from '../../../../utils/schema';
import { db } from '/utils/db';
import Webcam from "react-webcam";
import { WebcamIcon } from 'lucide-react';

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
    <div className='my-10 flex justify-center items-center flex-col' >
    <h1 className='font-bold text-2xl text-[#6B8A7A]' > Let's Start Your Interview </h1>
    <div>
    <Webcam mirrored={true} />
    <WebcamIcon className='h-72 w-full p-20 bg bg-[#F9F9E0] rounded-lg border'/>
    </div>
    </div>
  )
}

export default Interview
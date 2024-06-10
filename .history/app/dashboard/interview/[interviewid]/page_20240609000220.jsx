"use client"
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { mySchemaUsers } from '../../../../utils/schema';
import { db } from '/utils/db';
import Webcam from "react-webcam";
import { WebcamIcon } from 'lucide-react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Interview = ({params}) => {
    const [EnabledWebcam,setEnabledWebcam]=useState()
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
    { EnabledWebcam? <Webcam 
    onUserMedia={()=>setEnabledWebcam(true)}
    onUserMediaError={()=>setEnabledWebcam(false)}
    mirrored={true}
      style={{
        height:300,width:300
      }}

      />
    :
    <>
    <WebcamIcon className='h-72 w-full p-20 bg bg-[#F9F9E0] rounded-lg border'/>
    <Button colorScheme='blue' onClick={()=>setEnabledWebcam(true)}>Enable Webcam & mic</Button></>
    }
    </div>
    </div>
  )
}

export default Interview
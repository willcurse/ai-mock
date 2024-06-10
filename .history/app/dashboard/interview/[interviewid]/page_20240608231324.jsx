"use client"
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'
import { mySchemaUsers } from '../../../../utils/schema';
import { db } from '/utils/db';

const Interview = ({params}) => {

    useEffect(()=>{
        console.log(params.interviewid)
    },[])

    const GetInterviewDetails = async()=>{
        const result=await db.select().from(mySchemaUsers)
        .where(eq(mySchemaUsers.Mockid,params.interviewid))
        console.log(result)
    }
  return (
    <div>Interview</div>
  )
}

export default Interview
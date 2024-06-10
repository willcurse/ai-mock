"use client"
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { db } from '../../../utils/db'
import { mySchemaUsers } from '../../../utils/schema'


const Interview = async () => {
    const {user}=useUser()
    const [InterView,setInterView]=useState([])

    useEffect(()=>{
        user&&getUser()

    },[user])

    
    const getUser=await db.select()
    .from(mySchemaUsers)
    .where(eq(mySchemaUsers.createdBY,user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(mySchemaUsers))
    console.log(getUser)
    setInterView(getUser)
  return (
    <div>
        <h2 className='text-[#ACD793] font-medium text-xl'>Previous Interview's</h2>
    </div>
  )
}

export default Interview
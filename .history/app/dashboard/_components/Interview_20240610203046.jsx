"use client"
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { db } from '../../../utils/db'
import { mySchemaUsers } from '../../../utils/schema'

const Interview = () => {
    const { user } = useUser()
    const [interviews, setInterviews] = useState([])

    useEffect(() => {
        if (user) {
            getUserInterviews()
        }
    }, [user])

    const getUserInterviews = async () => {
        try {
            const result = await db.select()
                .from(mySchemaUsers)
                .where(eq(mySchemaUsers.createdBY, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(mySchemaUsers))
            
            console.log(result)
            setInterviews(result)
        } catch (error) {
            console.error("Error fetching user interviews:", error)
        }
    }

    return (
        <div>
            <h2 className='text-[#ACD793] font-medium text-xl'>Previous Interviews</h2>
            <div>
                {interviews.map((interview, index) => (
                    <div key={index} className='my-4 p-4 border rounded'>
                        {/* Replace the following with relevant interview details */}
                        <h3 className='text-lg font-bold'>{interview.title}</h3>
                        <p>{interview.description}</p>
                        <p><strong>Date:</strong> {interview.createdAT}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Interview

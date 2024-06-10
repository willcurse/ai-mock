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
            
            setInterviews(result)
        } catch (error) {
            console.error("Error fetching user interviews:", error)
        }
    }

    return (
        <div>
            <h2 className='text-[#ACD793] font-medium text-xl mb-4'>Previous Interviews</h2>
            <div>
                {interviews.map((interview, index) => (
                    <div key={index} className='my-4 p-4 border border-gray-300 rounded-lg shadow-md'>
                        <h3 className='text-lg font-bold mb-2'>Job Description: {interview.jobdesc}</h3>
                        <p className='text-sm text-gray-600'>Job Position: {interview.jobposition}</p>
                        <p className='text-sm text-gray-600'>Experience: {interview.jobexp}</p>
                        <p className='text-sm text-gray-600'>Created By: {interview.createdBY}</p>
                        <p className='text-sm text-gray-600'>Date: {interview.createdAT}</p>
                        <div>
                        <Button variant="outline">Button</Button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Interview

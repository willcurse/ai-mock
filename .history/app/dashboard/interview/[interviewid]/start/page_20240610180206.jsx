"use client";
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
// import { mySchemaUsers } from '../../../../utils/schema';
import {mySchemaUsers} from '../../../../../utils/schema'
import { db } from '/utils/db';
import Question from './_components/Question'
import AudioVideo from './_components/AudioVideo'
import { Button } from '@chakra-ui/react'

const Start = ({params}) => {

    const [interviewData, setInterviewData] = useState();
    const [interviewQuestion,setInterviewQuestion]=useState()
    const [activeIndex,setActiveIndex]=useState(0)

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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        
        <Question interviewQuestion={interviewQuestion} activeIndex={activeIndex}/>
        {/* video/audio */}
        <AudioVideo interviewQuestion={interviewQuestion} activeIndex={activeIndex} interviewData={interviewData}/> 
        </div>
        <div className='flex items-center
         justify-between' >
        <Button colorScheme='blue'>Previous Button</Button>
        <Button colorScheme='blue'>Next Button</Button>
        <Button colorScheme='blue'>EndButton</Button>
        </div>
    </div>
  )
}

export default Start
"use client";
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { mySchemaUsers } from '../../../../utils/schema';
import { db } from '/utils/db';
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from 'lucide-react';
import { Button } from '@chakra-ui/react';

const Interview = ({ params }) => {
  const [enabledWebcam, setEnabledWebcam] = useState(false);
  const [interviewData, setInterviewData] = useState();

  useEffect(() => {
    console.log(params.interviewid);
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    const result = await db.select().from(mySchemaUsers)
      .where(eq(mySchemaUsers.Mockid, params.interviewid));
    setInterviewData(result[0]);
  };

  return (
    <div className="my-10 flex justify-center items-center flex-col space-y-6">
      <h1 className="font-bold text-3xl text-[#6B8A7A]">Let's Start Your Interview</h1>
      
      <p className='p-3 border rounded-lg flex items-center space-x-2 bg-gray-100 text-gray-700'>
        <Lightbulb className='w-5 h-5 text-yellow-500'/>
        <span>Click on the button below to enable your mic and camera</span>
      </p>

      <div className="flex flex-col items-center">
        {enabledWebcam ? (
          <Webcam
            onUserMedia={() => setEnabledWebcam(true)}
            onUserMediaError={() => setEnabledWebcam(false)}
            mirrored={true}
            style={{
              height: 300,
              width: 300,
              borderRadius: '0.75rem',
              border: '2px solid #CBD5E0'
            }}
          />
        ) : (
          <div className="flex flex-col items-center">
            <WebcamIcon className="h-72 w-72 p-10 bg-[#F9F9E0] rounded-lg border" />
            <Button
              colorScheme="blue"
              className="mt-4"
              onClick={() => setEnabledWebcam(true)}
            >
              Enabled Webcam & mic
            </Button>
          </div>
        )}
      </div>

      {interviewData && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl">
          <h2 className="text-xl font-semibold text-[#6B8A7A]">Your Interview Details</h2>
          <p className="mt-2 text-gray-600"><strong>Job Position:</strong> {interviewData.jobposition}</p>
          <p className="mt-2 text-gray-600"><strong>Job Description:</strong> {interviewData.jobdesc}</p>
          <p className="mt-2 text-gray-600"><strong>Years of Experience:</strong> {interviewData.jobexp} Years</p>
        </div>
      
      )}
      <div>
        
      </div>

    </div>
  );
};

export default Interview;
"use client"
import { Mic, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { Button, useToast } from '@chakra-ui/react';
import useSpeechToText from 'react-hook-speech-to-text';
import { chatSession } from '/utils/GoogleAiModel';
import { db } from '../../../../../../utils/db';
import { userAnswer as userAnswerSchema } from '../../../../../../utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

const AudioVideo = ({ interviewQuestion, activeIndex, interviewData }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const toast = useToast();
    const user = useUser();
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.forEach((result) => {
            setUserAnswer(prevAns => prevAns + result?.transcript);
        });
    }, [results]);


    useEffect(()=>{
        if(!isRecording&&userAnswer.length>5){
            UpdateUserData()
        }
    },[userAnswer])



    const SaveUserAnswer = async () => {
        if (isRecording) {
            stopSpeechToText();
            if (userAnswer?.length < 5) {
                toast({
                    title: 'Answer too short.',
                    description: 'Your answer is too short. Please provide more details.',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

           
        } else {
            startSpeechToText();
        }
    };


    const UpdateUserData= async()=>{
        console.log(userAnswer)
        // const feedback = `question: ${interviewQuestion[activeIndex]?.question}, user answer: ${userAnswer}, Depends on user Question and Answer: please give my the feedback for the given interview`;

        // try {
        //     const result = await chatSession.sendMessage(feedback);
        //     const responseText = await result.response.text();

        //     // Check if responseText is a valid JSON string
        //     let jsonFeedbackMockResp;
        //     try {
        //         // Remove any non-JSON parts of the response
        //         const jsonResponse = responseText.replace('```json', '').replace('```', '').trim();
        //         jsonFeedbackMockResp = JSON.parse(jsonResponse);
        //     } catch (parseError) {
        //         throw new Error('Invalid JSON response');
        //     }

        //     const resp = await db.insert(userAnswerSchema).values({
        //         MockidRef: interviewData?.Mockid,
        //         question: interviewQuestion[activeIndex]?.question,
        //         correctAns: interviewQuestion[activeIndex]?.answer,
        //         useranswer: userAnswer,
        //         feedback: jsonFeedbackMockResp.feedback,
        //         rating: jsonFeedbackMockResp.rating,
        //         userEmail: user?.primaryEmailAddress?.emailAddress,
        //         createdAT: moment().format('DD-MM-yyyy')
        //     });

        //     if (resp) {
        //         toast({
        //             title: 'Successful',
        //             description: 'User record added successfully',
        //             status: 'success',
        //             duration: 5000,
        //             isClosable: true,
        //         });
        //     }
        // } catch (err) {
        //     console.error('Error parsing feedback response:', err.message);
        //     toast({
        //         title: 'Error',
        //         description: 'Failed to parse feedback response. Please try again.',
        //         status: 'error',
        //         duration: 5000,
        //         isClosable: true,
        //     });
        // }
        // setUserAnswer('');

    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='relative flex flex-col justify-center items-center bg-slate-100 rounded-lg p-5 my-10'>
                <WebcamIcon width={200} height={200} className='absolute' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        zIndex: 10
                    }}
                />
            </div>
            <Button className='my-10' onClick={SaveUserAnswer}>
                {isRecording
                    ? <h2 className='animate-pulse text-red-600 flex gap-2'>
                        <Mic /> 'Recording Started'
                      </h2>
                    : 'Record Answer'}
            </Button>
            <Button className='m-2 mb-5' onClick={() => console.log(userAnswer)} colorScheme='blue'>user Answer</Button>
        </div>
    );
}

export default AudioVideo;

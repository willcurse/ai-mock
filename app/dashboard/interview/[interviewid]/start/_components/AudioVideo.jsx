"use client"
import { Mic, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { Button, useToast } from '@chakra-ui/react';
import useSpeechToText from 'react-hook-speech-to-text';
// import { chatSession } from '/utils/GoogleAiModel';
import {chatSession} from '../../../../../../utils/GoogleAiModel'
import { db } from '/utils/db';
import { userAnswer as userAnswerSchema } from '../../../../../../utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';


const AudioVideo = ({ interviewQuestion, activeIndex, interviewData }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const toast = useToast();
    const {user} = useUser();
    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    const [jsonSave, setJsonSave] = useState(null);

    useEffect(() => {
        results.forEach((result) => {
            setUserAnswer(prevAns => prevAns + result?.transcript);
        });
    }, [results]);

    useEffect(()=>{
        if(!isRecording&&userAnswer.length>5){
            UpdateUserAnser()
        }
    },[userAnswer])

    const SaveUserAnswer =  () => {
        if (isRecording) {
            stopSpeechToText();

        } else {
            startSpeechToText();
        }
    };

    const UpdateUserAnser =async()=>{        
        const FeedbackPrompt = `Question: ${interviewQuestion[activeIndex]?.question}, 
        user answer: ${userAnswer},
        Depends on user Question and Answer: please give me the rating  and feedback in just 3 to 5 lines for the given interview`;
       
        try{   
            const result = await chatSession.sendMessage(FeedbackPrompt);
            const responseText = result.response.candidates[0].content.parts[0].text;
            console.log('Full response text:', responseText);

            // Extract rating and feedback
            const ratingMatch = responseText.match(/Rating:\s*(.*?)(?:\n|$)/i);
            const feedbackMatch = responseText.match(/Feedback:\s*([\s\S]*)/i);

            const rating = ratingMatch ? ratingMatch[1].trim() : 'No rating found';
            const feedback = feedbackMatch ? feedbackMatch[1].trim() : 'No feedback found';

            console.log('Extracted Rating:', rating);
            console.log('Extracted Feedback:', feedback);

            const resp = await db.insert(userAnswerSchema).values({
                MockidRef: interviewData?.Mockid,
                question: interviewQuestion[activeIndex]?.question,
                correctAns: interviewQuestion[activeIndex]?.answer,
                useranswer: userAnswer,
                feedback: feedback,
                rating: rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAT: moment().format('DD-MM-yyyy')
            });
            // if (!feedback || !rating) {
            //     throw new Error('Feedback or rating missing in JSON response');
            // }

            if (resp) {
                toast({
                    title: 'Successful',
                    description: 'User record added successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
            setUserAnswer('');
            setResults([])
        }catch(error){
            console.log(error)
        }
        setResults([])
        
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

"use client"
import { Mic, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import { Button, ButtonGroup } from '@chakra-ui/react'
import useSpeechToText from 'react-hook-speech-to-text';


const AudioVideo = () => {
    
    const[userAnswer,setUserAnswer]=useState('')
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

      useEffect(()=>{
        results.map((result)=>(
            setUserAnswer(prevAns=>prevAns+result?.transcript)
        ))
      },[results])

  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex flex-col justify-center items-center bg-slate-100 rounded-lg p-5 my-10 '>
        <WebcamIcon width={200} height={200} className='absolute'/>
        <Webcam 
        mirrored={true}
            style={{
                height:300,
                width:'100%',
                zIndex:10
            }}
        />
    </div>
    <Button className='my-10 '  onClick={isRecording?stopSpeechToText:startSpeechToText}>
    {isRecording
    ?
    <h2 className=' animate-pulse text-red-600 flex gap-2'>
        <Mic/> 'Recording Started'
    </h2>
    :
    'Record Answer'}</Button>
    <Button className='m-2 mb-5' onClick={()=>console.log(userAnswer)} colorScheme='blue'>user Answer</Button>
    </div>
  )
}

export default AudioVideo
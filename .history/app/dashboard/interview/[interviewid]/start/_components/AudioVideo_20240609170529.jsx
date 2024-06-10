"use client"
import { Mic, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { Button } from '@chakra-ui/react';
import useSpeechToText from 'react-hook-speech-to-text';

const AudioVideo = () => {
    const [userAnswer, setUserAnswer] = useState('');
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
        results.map((result) => (
            setUserAnswer(prevAns => prevAns + result?.transcript)
        ));
    }, [results]);

    const SaveUserAnswer = () => {
        if (isRecording) {
            stopSpeechToText();
        } else {
            startSpeechToText();
        }
    };

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='relative flex flex-col justify-center items-center bg-slate-100 rounded-lg p-5 my-10'>
                {!navigator.mediaDevices.getUserMedia && (
                    <div className='absolute z-10 flex flex-col justify-center items-center h-full w-full bg-opacity-75 bg-gray-100'>
                        <WebcamIcon width={200} height={200} className='text-gray-500' />
                        <p className='text-gray-600 mt-4'>Click the button below to enable your mic and camera</p>
                    </div>
                )}
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: '100%',
                        borderRadius: '0.75rem',
                        border: '2px solid #CBD5E0',
                        zIndex: 10
                    }}
                />
            </div>
            <div className='flex flex-col items-center'>
                <Button className='my-10' onClick={SaveUserAnswer} colorScheme={isRecording ? 'red' : 'blue'}>
                    {isRecording
                        ? <h2 className='animate-pulse text-red-600 flex gap-2'>
                            <Mic /> Recording Started
                          </h2>
                        : 'Record Answer'}
                </Button>
                <Button className='m-2 mb-5' onClick={() => console.log(userAnswer)} colorScheme='blue'>
                    Show User Answer
                </Button>
            </div>
        </div>
    );
};

export default AudioVideo;

"use client"
import { Mic, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import { Button, ButtonGroup } from '@chakra-ui/react';
import useSpeechToText from 'react-hook-speech-to-text';

const AudioVideo = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [enabledWebcam, setEnabledWebcam] = useState(false);
  const [isClient, setIsClient] = useState(false);

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
    setIsClient(true); // Set to true when the component mounts on the client side
  }, []);

  useEffect(() => {
    results.forEach((result) => {
      setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col justify-center items-center bg-slate-100 rounded-lg p-5 my-10 relative h-[300px] w-[400px]'>
        {!enabledWebcam && (
          <div className='absolute z-10 flex flex-col justify-center items-center h-full w-full bg-opacity-75 bg-gray-100'>
            <WebcamIcon width={200} height={200} className='text-gray-500' />
            <p className='text-gray-600 mt-4'>Click the button below to enable your mic and camera</p>
            <Button
              colorScheme="blue"
              className="mt-4"
              onClick={() => setEnabledWebcam(true)}
            >
              Enable Webcam & Mic
            </Button>
          </div>
        )}
        {enabledWebcam && isClient && (
          <Webcam
            mirrored={true}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '0.75rem',
              border: '2px solid #CBD5E0'
            }}
          />
        )}
        {enabledWebcam && isClient && (
          <div className="absolute bottom-4 flex space-x-4">
            <Button
              colorScheme="red"
              onClick={() => setEnabledWebcam(false)}
            >
              Disable Webcam
            </Button>
            <Button colorScheme='blue' onClick={isRecording ? stopSpeechToText : startSpeechToText}>
              {isRecording ? 'Stop Mic' : 'Start Mic'}
            </Button>
          </div>
        )}
      </div>
      <Button onClick={() => console.log(userAnswer)} className='mt-4'>
        Log Answer
      </Button>
    </div>
  );
}

export default AudioVideo;

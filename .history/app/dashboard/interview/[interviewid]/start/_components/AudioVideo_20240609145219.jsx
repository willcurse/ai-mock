
"use client"
import { WebcamIcon } from 'lucide-react';
import React, { useState } from 'react';
import Webcam from "react-webcam";
import { Button } from '@chakra-ui/react';
import useSpeechToText from 'react-hook-speech-to-text';

const AudioVideo = () => {
  const [enabledWebcam, setEnabledWebcam] = useState(false);

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

  return (
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
      {enabledWebcam && (
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
      {enabledWebcam && (
        <div className="absolute bottom-4 flex space-x-4">
          <Button
            colorScheme="red"
            onClick={() => setEnabledWebcam(false)}
          >
            Disable Webcam & Mic
          </Button>
          <Button colorScheme='blue'>Button</Button>
        </div>
      )}
    </div>
  );
}

export default AudioVideo;

import { WebcamIcon } from 'lucide-react';
import React, { useState } from 'react';
import Webcam from "react-webcam";
import { Button } from '@chakra-ui/react';

const AudioVideo = () => {
  const [enabledWebcam, setEnabledWebcam] = useState(false);

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
        <Button
          colorScheme="red"
          className="absolute bottom-4"
          onClick={() => setEnabledWebcam(false)}
        >
          Disable Webcam & Mic
        </Button>
      )}
    </div>
  );
}

export default AudioVideo;
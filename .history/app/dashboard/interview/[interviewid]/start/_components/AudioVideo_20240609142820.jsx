import { WebcamIcon } from 'lucide-react';
import React from 'react';
import Webcam from "react-webcam";

const AudioVideo = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-100 rounded-lg p-5 my-10 relative'>
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
          border: '2px solid #CBD5E0'
        }}
      />
    </div>
  )
}

export default AudioVideo;

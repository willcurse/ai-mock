import { WebcamIcon } from 'lucide-react';
import React from 'react'
import Webcam from "react-webcam";

const AudioVideo = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-100 rounded-lg p-5 my-10 '>
        <WebcamIcon width={200} height={200} className='absolute'/>
        <Webcam 
        mirrored={true}
            style={{
                height:300,
                width:'100%',
            }}
        />
    </div>
  )
}

export default AudioVideo
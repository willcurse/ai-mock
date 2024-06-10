import React from 'react';


import { SpeechIcon, StickyNote } from 'lucide-react';

const Note = ({ text }) => {
  return (
    <div className='flex items-center p-3 border rounded-lg bg-yellow-100 text-yellow-800 my-5'>
      <StickyNote className='w-6 h-6 mr-2 text-yellow-600' />
      <span>{text}</span>
    </div>
  );
}

const textToSpeech=(line)=>{
  if('speechSynthesis' in window){
    const speech=new SpeechSynthesisUtterance(line)
    window.speechSynthesis.speak(speech)
  }else{
    alert("sorry")
  }

}

const Question = ({ interviewQuestion, activeIndex }) => {
  return interviewQuestion && (
    <div className='p-5 border rounded-lg my-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {interviewQuestion.map((question, index) => (
          <h2
            key={index}
            className={`p-2 rounded-full bg-[#F5F5F4] text-xs md:text-sm text-center font-bold ${
              activeIndex === index ? 'bg-blue-600 text-white' : ''
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className='my-5 text-md font-semibold text-gray-800'>
        {interviewQuestion[activeIndex]?.question}
      </h2>
      <SpeechIcon onClick={()=>textToSpeech(interviewQuestion[activeIndex]?.question)}/>
      <Note text="Make sure to answer this question with examples from your experience." />
    </div>
  );
}

export default Question;

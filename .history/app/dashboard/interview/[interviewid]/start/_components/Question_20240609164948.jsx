import React, { useState, useEffect } from 'react';
import { SpeechIcon, StickyNote } from 'lucide-react';

const Note = ({ text }) => {
  return (
    <div className='flex items-center p-3 border rounded-lg bg-yellow-100 text-yellow-800 my-5'>
      <StickyNote className='w-6 h-6 mr-2 text-yellow-600' />
      <span>{text}</span>
    </div>
  );
}

const Question = ({ interviewQuestion, activeIndex }) => {
  const [speech, setSpeech] = useState(null);

  useEffect(() => {
    if (speech) {
      speech.onend = () => setSpeech(null); // Clear the speech instance when it ends
    }
  }, [speech]);

  const textToSpeech = (line) => {
    if ('speechSynthesis' in window) {
      // Stop current speech if it's already playing
      if (speech) {
        window.speechSynthesis.cancel();
        setSpeech(null);
      }
      const newSpeech = new SpeechSynthesisUtterance(line);
      window.speechSynthesis.speak(newSpeech);
      setSpeech(newSpeech);
    } else {
      alert("Sorry, your browser doesn't support speech synthesis.");
    }
  }

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
      <SpeechIcon
        className={`cursor-pointer ${speech ? 'text-red-500' : ''}`}
        onClick={() => textToSpeech(interviewQuestion[activeIndex]?.question)}
      />
      <Note text="Make sure to answer this question with examples from your experience." />
    </div>
  );
}

export default Question;

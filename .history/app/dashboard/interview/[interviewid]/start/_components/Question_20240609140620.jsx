import React from 'react';

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
    </div>
  );
}

export default Question;

import React from 'react';

const Feedback = () => {
  return (
    <div className='p-10'>
      <h2 className='text-3xl font-bold text-[#6B8A7A] m-2'>Congratssss!✨</h2>
      <h3 className='text-xl font-bold '>Here is your Overall <span className='bg-[#6B8A7A] text-white rounded-md p-1'>Interview</span> Report</h3>
      <p className='text-[#254336] text-lg my-3'>Your Overall Interview Rating is <strong>7</strong></p>
      
      <h2 className='text-2xl font-bold text-[#686D76]'> Below are your interview questions and feedback....😊</h2>
      <div className='mt-5'>
      
          <div key={index} className='mb-4 p-4 bg-gray-100 rounded-md'>
            <h4 className='text-lg font-semibold text-[#254336]'>Question </h4>
            <p className='text-md text-[#254336]'><strong>Your Answer:</strong> </p>
            <p className='text-md text-[#254336]'><strong>Correct Answer:</strong></p>
            <p className='text-md text-[#254336]'><strong>Feedback:</strong></p>
            <p className='text-md text-[#254336]'><strong>Rating:</strong></p>
          </div>
        
      </div>
    </div>
  );
};

export default Feedback;

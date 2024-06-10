import React from 'react';

const Feedback = ({ overallRating, questions }) => {
  return (
    <div className='p-10'>
      <h2 className='text-3xl font-bold text-[#6B8A7A] m-2'>Congratssss!✨</h2>
      <h3 className='text-xl font-bold '>Here is your Overall <span className='bg-[#6B8A7A] text-white rounded-md p-1'>Interview</span> Report</h3>
      <p className='text-[#254336] text-lg my-3'>Your Overall Interview Rating is <strong>{overallRating}</strong></p>
      
      <h2 className='text-2xl font-bold text-[#686D76]'> Below are your interview questions and feedback....😊</h2>
      <div className='mt-5'>
        {questions.map((question, index) => (
          <div key={index} className='mb-4 p-4 bg-gray-100 rounded-md'>
            <h4 className='text-lg font-semibold text-[#254336]'>Question {index + 1}: {question.question}</h4>
            <p className='text-md text-[#254336]'><strong>Your Answer:</strong> {question.userAnswer}</p>
            <p className='text-md text-[#254336]'><strong>Correct Answer:</strong> {question.correctAnswer}</p>
            <p className='text-md text-[#254336]'><strong>Feedback:</strong> {question.feedback}</p>
            <p className='text-md text-[#254336]'><strong>Rating:</strong> {question.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

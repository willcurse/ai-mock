"use client";
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Input,
  Textarea
} from '@chakra-ui/react';
import { chatSession } from '/utils/GoogleAiModel';

const AddNewInterview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');

  const onClose = () => setIsOpen(false);

  const onDelete = () => {
    if (!jobPosition || !jobDescription || !yearsOfExperience) {
      alert('Please fill all required fields');
      return;
    }
    onClose();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(jobDescription, jobPosition, yearsOfExperience);

    const input = `jobPosition: ${jobPosition}, job description: ${jobDescription}, years of experience: ${yearsOfExperience}. Based on this information, give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTIONS} interview questions with answers in JSON format`;

    try {
      const result = await chatSession.sendMessage(input);
      const responseText = await result.response.text();
      
      // Log the raw response
      console.log('Raw response:', responseText);

      // Clean the response by removing markdown code fences and trimming whitespace
      const cleanedResponse = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      console.log('Cleaned response:', cleanedResponse);

      // Further clean the response to remove unexpected characters
      const furtherCleanedResponse = cleanedResponse.replace(/[\u200B-\u200D\uFEFF]/g, '');
      console.log('Further cleaned response:', furtherCleanedResponse);

      // Attempt to parse the further cleaned response
      try {
        const parsedResponse = JSON.parse(furtherCleanedResponse);
        console.log('Parsed JSON response:', parsedResponse);
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
        console.error('Cleaned Response:', furtherCleanedResponse);
      }
    } catch (error) {
      console.error('Error during chat session:', error);
    }
  };

  return (
    <div>
      <div
        className='p-10 border rounded-lg bg-[#F9F9E0] hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <h2 className='font-bold text-lg text-center'>+ Create New</h2>
      </div>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={null} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent className='max-w-xl'>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Fill more Information About the Interview
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Add details about your job position, description, and years of experience.
            <form onSubmit={onSubmit}>
              <div className='mt-7 my-2'>
                <label>Job role/position</label>
                <Input
                  placeholder='Ex. Full Stack Developer'
                  required
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>
              <div className='mt-7 my-2'>
                <label>Job Description</label>
                <Textarea
                  placeholder='Ex. Reactjs, Nextjs, HTML, CSS, JS etc...'
                  required
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
              <div className='mt-7 my-2'>
                <label>Years of Experience</label>
                <Input
                  placeholder='Ex. 5'
                  type='number'
                  required
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
              </div>
              <Button type='submit'>Start Interview 🌟</Button> 
            </form>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='red' onClick={onClose}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddNewInterview;

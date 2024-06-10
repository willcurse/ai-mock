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
import { LoaderCircle } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { db } from '/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { mySchemaUsers } from '../../../utils/schema';

const AddNewInterview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [JsonSave, setJsonSave] = useState('');
  const { user } = useUser();

  const onClose = () => setIsOpen(false);

  const onDelete = () => {
    if (!jobPosition || !jobDescription || !yearsOfExperience) {
      alert('Please fill all required fields');
      return;
    }
    onClose();
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    console.log(jobDescription, jobPosition, yearsOfExperience);

    const input = `jobPosition:${jobPosition}, job description:${jobDescription}, years of experience:${yearsOfExperience}. Based on this information, give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTIONS} interview questions with answers in JSON format`;

    try {
      const result = await chatSession.sendMessage(input);
      const responseText = await result.response.text();
      
      console.log('Raw response from chat session:', responseText);

      const cleanedResponse = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      console.log('Cleaned response:', cleanedResponse);

      const parsedResponse = JSON.parse(cleanedResponse);
      console.log('Parsed JSON response:', parsedResponse);

      setJsonSave(parsedResponse);

      const resp = await db.insert(mySchemaUsers).values({
        Mockid: uuidv4(),
        jsonMockResp: cleanedResponse,
        jobposition: jobPosition,
        jobdesc: jobDescription,
        jobexp: yearsOfExperience,
        createdBY: user?.primaryEmailAddress?.emailAddress,
        createdAT: moment().format('DD-MM-yyyy')
      }).returning({ Mockid: mySchemaUsers.Mockid });

      console.log('id is :', resp);

    } catch (error) {
      console.error('Error during chat session:', error);
      alert(`Error during chat session: ${error.message}`);
    } finally {
      setLoading(false);
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={null}
        onClose={onClose}
      >
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
              <Button type='submit' disabled={loading}>
                {loading ? (
                  <>
                    <LoaderCircle className='animate-spin' /> Generating Using A.I
                  </>
                ) : (
                  'Start Interview 🌟'
                )}
              </Button>
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

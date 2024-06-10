"use client"
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button
} from '@chakra-ui/react';

import { Input } from '@chakra-ui/react'

const AddNewInterview = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const onClose = () => setIsOpen(false); 
  const cancelRef = React.useRef(); 

  const onDelete = () => {
    
    onClose(); 
  };

  return (
    <div>
      <div
        className='p-10 border rounded-lg bg-[#F9F9E0] hover:scale-105 hover:shadow-md transition-all duration-200'
        onClick={() => setIsOpen(true)} 
      >
        <h2 className='font-bold text-lg text-center'>+ Create New</h2>
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        
      >
        <AlertDialogOverlay>
          <AlertDialogContent className='max-w-xl' >
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              <h1>Fill more Information About the Interview</h1>
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
            Add Details about your Job position,description and years of exprience
            <div>
            <label>Job role/position</label>
            <Input placeholder='Ex.FullStack Developer' />
            </div>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button  onClick={onDelete} ml={3}>
                Start Interview
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default AddNewInterview;

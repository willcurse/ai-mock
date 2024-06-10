import React from 'react';
import { StickyNote } from 'lucide-react';

const Note = ({ text }) => {
  return (
    <div className='flex items-center p-3 border rounded-lg bg-yellow-100 text-yellow-800 my-5'>
      <StickyNote className='w-6 h-6 mr-2 text-yellow-600' />
      <span>{text}</span>
    </div>
  );
}

export default Note;

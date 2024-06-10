"use client";
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { mySchemaUsers } from '../../../../../utils/schema';
import { db } from '/utils/db';
import Question from './_components/Question';
import AudioVideo from './_components/AudioVideo';
import { Button, Spinner, Box } from '@chakra-ui/react';

const Start = ({ params }) => {
    const [interviewData, setInterviewData] = useState(null);
    const [interviewQuestion, setInterviewQuestion] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getInterviewDetails();
    }, []);

    const getInterviewDetails = async () => {
        try {
            const result = await db.select().from(mySchemaUsers)
                .where(eq(mySchemaUsers.Mockid, params.interviewid));
            
            if (result.length > 0) {
                const jsonMockResp = JSON.parse(result[0].jsonMockResp);
                setInterviewQuestion(jsonMockResp);
                setInterviewData(result[0]);
            } else {
                setError("No interview data found.");
            }
        } catch (err) {
            setError("Failed to fetch interview details.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner size="xl" />;
    }

    if (error) {
        return <Box color="red.500">{error}</Box>;
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Questions */}
                <Question interviewQuestion={interviewQuestion} activeIndex={activeIndex} />
                {/* Video/Audio */}
                <AudioVideo interviewQuestion={interviewQuestion} activeIndex={activeIndex} interviewData={interviewData} /> 
            </div>
            <div className='flex justify-end gap-6'>
                {activeIndex > 0 &&
                    <Button colorScheme='blue' onClick={() => setActiveIndex(activeIndex - 1)}>Previous Question</Button>}
                {activeIndex !== interviewQuestion?.length - 1 &&
                    <Button colorScheme='blue' onClick={() => setActiveIndex(activeIndex + 1)}>Next Question</Button>}
                {activeIndex === interviewQuestion?.length - 1 &&
                    <Button colorScheme='blue'>End Interview</Button>}
            </div>
        </div>
    );
};

export default Start;


import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import Interview from './_components/Interview'

const Dashboard = () => {
  return (
    <div className='p-10 '>
    <h1 className='font-bold text-2xl'>Dashboard</h1>
    <h2 className='text-[#6B8A7A] text-xl '>Create and Give an a.i Mock interview</h2>

    <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
    <AddNewInterview/>
    </div>
{/* interview list */}
<Interview/>
    </div>
  )
}

export default Dashboard
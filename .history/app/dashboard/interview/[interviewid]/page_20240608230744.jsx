"use client"
import React, { useEffect } from 'react'

const Interview = ({params}) => {

    useEffect(()=>{
        console.log(params.interviewid)
    },[])

  return (
    <div>Interview</div>
  )
}

export default Interview
"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function TypeAnimation() {
  return (
    <div className='text-3xl font-semibold mt-2'>
        <Typewriter
         words={['Design The Journey Together', 'Plan with Friends', 'Move Fast Plan Smarter']}
         loop={true}
         cursor
         cursorStyle="|"
         typeSpeed={70}
         deleteSpeed={50}
         delaySpeed={1000}
        />
    </div>
  )
}

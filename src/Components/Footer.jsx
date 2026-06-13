import { useTime } from 'framer-motion'
import React from 'react'

const Footer = () => {
    const now = new Date()
  return (
    <div className='flex justify-center items-center bg-black p-5'>
      <div>
        <h3>@ {now.getFullYear()} All Rights Reserved</h3>
      
      </div>
    </div>
  )
}

export default Footer

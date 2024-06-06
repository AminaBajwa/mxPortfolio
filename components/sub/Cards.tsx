"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
//import { SparklesIcon } from 'heroicons/react/24/solid'

const Cards = () => {
  return (
    <>
 <div className="card">
  <div className="upper-part">
    <div className="upper-part-face">Hover Me</div>
    <div className="upper-part-back">Some Additional Information At The Back Side</div>
  </div>
  <div className="lower-part">
    <div className="lower-part-face">Face Side</div>
    <div className="lower-part-back">Back Side</div>
  </div>
</div>

    </>    
  )
}

export default Cards
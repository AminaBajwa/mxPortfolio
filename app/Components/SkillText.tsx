"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/app/utils/motion'
//import { SparklesIcon } from 'heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='px-6 sm:py-20 py-10'>
<motion.div
        variants={slideInFromRight(0.5)}
        className='font text-[20px] text-gray-200 mb-2 mt-[10px] text-center'
        >
            <p className="md:text-xl text-xl text-[#9615db] mt-10 mb-6 uppercase">Your Vision, Our Expertise</p>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='max-w-screen-xl mx-auto text-center text-white'>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-4">Making Apps With Modern Technologies</h1>
        </motion.div>
        

        
    </div>

    
  )
}

export default SkillText
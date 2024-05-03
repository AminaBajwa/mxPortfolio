"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
//import { SparklesIcon } from 'heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='px-6 sm:py-20 py-10'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='max-w-screen-xl mx-auto text-center text-white'
        >
            <h1 className="text-4xl max-sm:text-3xl font-extrabold leading-tight mb-4">Making Apps With Modern Technologies</h1>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='font text-[20px] text-gray-200 mb-20 mt-[10px] text-center'
        >
            <p className="text-lg mb-8 text-gray-400">Your Vision, Our Expertise</p>
        </motion.div>

        
    </div>

    
  )
}

export default SkillText
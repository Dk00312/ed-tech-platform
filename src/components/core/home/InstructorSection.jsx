import React from 'react';
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import CTAButton from './CTAButton';
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 items-center  justify-center'>

        <div className='lg:w-[50%]'>
            <img
                src={Instructor}
                alt=''
                className='shadow-white shadow-[-20px_-20px_0_0] '
            />
        </div>

        <div className='lg:w-[50%] flex gap-10 flex-col'>
            <div className='flex flex-col gap-10'>
                <h1 className='lg:w-[50%] text-4xl font-semibold text-white'>
                    Become An 
                    <HighlightText text={"Instructor"}/>
                </h1>

                <p className='font-medium text-[16px] text-justify w-[80%] text-richblack-300'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>
            </div>

            <div className='w-fit'>
                <CTAButton active={true} linkTo={"/signup"}>
                    <div className='flex items-center gap-3'>
                        Start Teaching Today
                        <FaArrowRight/>
                    </div>
                </CTAButton>
            </div>
            


        </div>


    </div>
  )
}

export default InstructorSection
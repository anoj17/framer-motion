"use client";

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import doctors from '../../public/doctors.webp'
import TopSection from './components/TopSection'
import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaTree } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaFileMedical } from "react-icons/fa";
import doctor from '../../public/doctor.jpg'
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import AnimatedNumber from './components/AnimatedNumber'

// interface iappProps {
//   doctors: string
// }

export default function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const animateVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  }

  const animateDiv = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
  }

  return <>
    <section className="h-screen w-full">
      <div style={{ backgroundImage: `url(/home.webp)`, height: "100%", width: "100%", backgroundSize: "cover" }} className="absolute -z-10">
        <div className="relative lg:pl-28 lg:pr-60 px-9 flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-600/50">
          <div className=" z-1000 opacity-100 w-full">
            <motion.h1 className="font-play text-[2.2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] lg:leading-tighter text-white font-extrabold"
              ref={ref}
              variants={animateVariants}
              initial='hidden'
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1 }}
            >The Right Pediatrician</motion.h1>
            <motion.p className="md:text-[1.2rem] text-[1rem] py-2 md:py-0 lg:text-[1.3rem] md:leading-8 -mt-3 font-mont text-white"
              ref={ref}
              variants={animateVariants}
              initial='hidden'
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: .5 }}
            >We at Dr life Saver always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</motion.p>
            <div>
              <motion.div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 md:items-center items-start text-white py-8"
                ref={ref}
                variants={animateVariants}
                initial='hidden'
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <FaHeartbeat size={50} />
                <div>
                  <h1 className="md:text-[1.7rem] text-[1.4rem] font-semibold md:leading-6 font-int">REGULAR CHECKUPS</h1>
                  <p className="text-[.9rem]">Praesent convallis tortor et enim laoreet, consectetur.</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={animateVariants}
              initial='hidden'
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 items-start md:items-center text-white">
                <FaMobileScreenButton size={50} />
                <div>
                  <h1 className="md:text-[1.7rem] text-[1.4rem] font-semibold leading-6 font-int">ALWAYS AVAILABLE</h1>
                  <p className="text-[.9rem]">Praesent convallis tortor et enim laoreet, consectetur.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>

    <section className="lg:h-screen w-full">
      <div className="lg:-mt-10 z-1000">
        <div className="flex flex-col w-full mb-5 md:flex-row items-center justify-center">
          <motion.div className="md:space-x-3 space-y-4 flex md:flex-row flex-col pl-6 lg:pr-20 md:pr-10 py-5 justify-center items-center bg-white"
            initial={{ opacity: 0, x: -300 }}
            ref={ref}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
            transition={{ duration: 1 }}
          >
            <div className="text-green-500 flex justify-center items-center">
              <FaPhone size={35} />
            </div>
            <div className="text-[.9rem] flex flex-col md:space-y-2 items-center justify-center">
              <p className="text-gray-500">Give us a Call</p>
              <p className="text-gray-800">1-888-123-4567</p>
            </div>
          </motion.div>

          <motion.div className="md:space-x-3 space-y-4 flex md:flex-row flex-col pl-6 lg:pr-20 md:pr-10 py-5 justify-center items-center bg-white"
            initial={{ opacity: 0, y: 300 }}
            ref={ref}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
            transition={{ duration: 1 }}
          >
            <div className="text-green-500 flex justify-center items-center">
              <MdOutlineMessage size={35} />
            </div>
            <div className="text-[.9rem] flex md:space-y-2 flex-col items-center justify-center">
              <p className="text-gray-500">Send us Message</p>
              <p className="text-gray-800">delife@saver.com</p>
            </div>
          </motion.div>

          <motion.div className="md:space-x-3 space-y-4 flex md:flex-row flex-col pl-6 lg:pr-20 md:pr-10 py-5 items-center bg-white"
            initial={{ opacity: 0, x: 300 }}
            ref={ref}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 300 }}
            transition={{ duration: 1 }}
          >
            <div className="text-green-500 flex justify-center items-center">
              <FaLocationDot size={35} />
            </div>
            <div className="text-[.9rem] flex flex-col md:space-y-2 items-center justify-center">
              <p className="text-gray-500">Visit our Location</p>
              <p className="text-gray-800">323 Suitland Street</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:px-28 flex flex-col lg:flex-row">
          <div className="flex flex-col md:flex-row">
            <motion.div className="text-white flex flex-col space-y-5 w-full px-10 py-14 bg-green-400"
              initial={{ opacity: 0, x: -300 }}
              ref={ref}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-bold text-2xl">Top Doctor</h1>
              <p className="text-[.9rem]">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
              <button className=" border border-white py-3 rounded-full text-[1rem] w-[150px]">Read More</button>
            </motion.div>

            <motion.div className="text-white flex flex-col space-y-5 w-full px-10 py-14 bg-green-600"
              initial={{ opacity: 0, y: 300 }}
              ref={ref}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 300 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="font-bold text-2xl">24 Hours Service</h1>
              <p className="text-[.9rem]">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
              <button className=" border border-white py-3 rounded-full text-[1rem] w-[150px]">Read More</button>
            </motion.div>
          </div>
          <motion.div className="text-white flex flex-col space-y-5 pl-10 md:justify-center md:items-center lg:justify-start lg:items-start lg:pl-10 py-14 w-full bg-green-900 lg:w-[900px]"

            initial={{ opacity: 0, x: 200 }}
            ref={ref}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <h1 className="font-bold text-2xl">Opening Hours</h1>
            <div className="flex flex-col space-y-2">
              <h1 className="font-bold text-[.9rem]">Monday-Friday</h1>
              <p className="text-[.8rem]">8:00-17:00</p>
              <h1 className="font-bold text-[.9rem]">Saturday</h1>
              <p className="text-[.8rem]">9:00-17:30</p>
              <h1 className="font-bold text-[.9rem]">Sunday</h1>
              <p className="text-[.8rem]">8:00-17:00</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>

    <section className="w-full lg:py-4">
      <TopSection head="About US"
        heading="The World’s Best Treatment In Our Hospital"
      />
      <div className='flex flex-col md:flex-row lg:px-28 md:px-16 space-x-4 py-14'>
        <motion.div className="md:w-1/2 w-full px-8 lg:px-0"
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-gray-500 leading-tight font-extrabold font-play md:text-3xl text-2xl lg:text-3xl">We are providing treatment by some experienced physicaians</h1>
          <p className="py-3 text-[.9rem] font-mont leading-relaxed text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do ei usmod tempor incididunt.enim minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex commodo conse inquat duis aute irure dolor. excepteur sint occaecat cupidatat non proident sunt culpa officia deserunt. quisquam est dolorem</p>
          <div className="flex flex-col py-2">
            <div className="flex space-x-3 items-center">
              <div className="text-green-500">
                <FaArrowAltCircleRight size={20} />
              </div>
              <h1 className="font-play font-semibold text-[1.2rem] tracking-tighter text-gray-500">Arts Programs</h1>
            </div>

            <div className="flex space-x-3 items-center">
              <div className="text-green-500">
                <FaArrowAltCircleRight size={20} />
              </div>
              <h1 className="font-play font-semibold text-[1.2rem] tracking-tighter text-gray-500">Online skilled Courses</h1>
            </div>

            <div className="flex space-x-3 items-center">
              <div className="text-green-500">
                <FaArrowAltCircleRight size={20} />
              </div>
              <h1 className="font-play font-semibold text-[1.2rem] tracking-tighter text-gray-500">Online Course Description</h1>
            </div>

            <div className="flex space-x-3 items-center">
              <div className="text-green-500">
                <FaArrowAltCircleRight size={20} />
              </div>
              <h1 className="font-play font-semibold text-[1.2rem] tracking-tighter text-gray-500">Successful Growth In our Institution</h1>
            </div>
          </div>
          <div className="flex justify-center items-center py-8 lg:block">
            <button className="py-3 px-6 text-[1rem] bg-green-500 text-white rounded-bl-full rounded-r-full">Contact US</button>
          </div>
        </motion.div>
        <motion.div className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 200 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
        >
          <Image src={doctors} alt="image" height={900} width={800} className="h-full w-full" />
        </motion.div>
      </div>
    </section>

    <section className=" w-full lg:pt-14">
      <TopSection
        head="SERVICES"
        heading="Greater access to surgical specialists"
      />
      <div className='flex pt-28 flex-col lg:flex-row lg:px-28 space-x-4 lg:pt-16'>
        <motion.div className="flex flex-col space-y-7 justify-center items-center"
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <div className="flex lg:space-x-4 lg:flex-row flex-col-reverse justify-center items-center">
            <div className=" lg:items-end py-7 lg:py-0 items-center flex flex-col justify-center lg:justify-end">
              <h1 className="text-gray-500 font-extrabold font-play text-xl md:text-2xl lg:text-3xl py-2">Qualified Doctors</h1>
              <h2 className="font-mont text-[.9rem] text-black/60">Lorem ipsum dolor sit amet, consecte mattis, pulvinar dapibus </h2>
            </div>
            <div className="bg-green-500 mx-2 flex justify-center hover:text-gray-600 items-center text-white p-4 rounded-full">
              <FaUserDoctor size={30} />
            </div>
          </div>
          <div className="flex space-x-4 flex-col-reverse lg:flex-row justify-center items-center">
            <div className=" lg:items-end py-5 items-center justify-center lg:py-0 flex flex-col lg:justify-end">
              <h1 className="text-gray-500 font-extrabold font-play text-xl md:text-2xl lg:text-3xl py-2">Cancer Service</h1>
              <h2 className="font-mont text-[.9rem] text-black/60">Lorem ipsum dolor sit amet, consecte mattis, pulvinar dapibus </h2>
            </div>
            <div className="bg-green-500 mx-2 flex justify-center hover:text-gray-600 items-center text-white p-4 rounded-full">
              <FaBriefcaseMedical size={30} />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row space-x-4 justify-center items-center">
            <div className=" lg:items-end py-5 lg:py-0 items-center justify-center flex flex-col lg:justify-end">
              <h1 className="text-gray-500 font-extrabold font-play text-xl md:text-2xl lg:text-3xl py-2">Operation Theatre</h1>
              <h2 className="font-mont text-[.9rem] items-end text-black/60">Lorem ipsum dolor sit amet, consecte mattis, pulvinar dapibus </h2>
            </div>
            <div className="bg-green-500 mx-2 flex justify-center hover:text-gray-600 items-center text-white p-4 rounded-full">
              <FaClinicMedical size={30} />
            </div>
          </div>
        </motion.div>

        <motion.div className=""
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
        >
          <Image src={doctor} alt="image" className=" object-cover" height={800} width={500} />
        </motion.div>

        <motion.div className="flex flex-col pt-16 lg:pt-0 space-y-7 justify-center items-center"
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <div className="flex lg:space-x-4 lg:flex-row flex-col justify-center items-center">
            <div className="bg-green-500 mx-2 flex justify-center hover:text-gray-600 items-center text-white p-4 rounded-full">
              <FaTree size={30} />
            </div>
            <div className=" lg:items-end py-7 lg:py-0 items-center flex flex-col justify-center lg:justify-end">
              <h1 className="text-gray-500 font-extrabold font-play text-xl md:text-2xl lg:text-3xl py-2">Qualified Doctors</h1>
              <h2 className="font-mont text-[.9rem] text-black/60">Lorem ipsum dolor sit amet, consecte mattis, pulvinar dapibus </h2>
            </div>
          </div>
          <div className="flex space-x-4 flex-col lg:flex-row justify-center items-center">
            <div className="bg-green-500 mx-2 flex justify-center hover:text-gray-600 items-center text-white p-4 rounded-full">
              <FaAmbulance size={30} />
            </div>
            <div className=" lg:items-end py-5 items-center justify-center lg:py-0 flex flex-col lg:justify-end">
              <h1 className="text-gray-500 font-extrabold font-play text-xl md:text-2xl lg:text-3xl py-2">Cancer Service</h1>
              <h2 className="font-mont text-[.9rem] text-black/60">Lorem ipsum dolor sit amet, consecte mattis, pulvinar dapibus </h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-x-4 justify-center items-center">
            <div className="bg-green-500 mx-2 flex justify-center hover:text-gray-600 items-center text-white p-4 rounded-full">
              <FaFileMedical size={30} />
            </div>
            <div className=" lg:items-end py-5 lg:py-0 items-center justify-center flex flex-col lg:justify-end">
              <h1 className="text-gray-500 font-extrabold font-play text-xl md:text-2xl lg:text-3xl py-2">Operation Theatre</h1>
              <h2 className="font-mont text-[.9rem] items-end text-black/60">Lorem ipsum dolor sit amet, consecte mattis, pulvinar dapibus </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="h-screen w-full">
      <div style={{ backgroundImage: `url(/home.webp)`, height: "100%", width: "100%", backgroundSize: "cover" }} className=" bg-fixed -z-10">
        <div className='bg-green-900/95 text-white lg:h-[350px] sm:justify-center flex flex-col lg:flex-row lg:flex lg:space-x-20 space-y-14 py-9 lg:py-0 lg:space-y-0'>
          <div className='flex flex-col items-center justify-center space-y-3 md:space-y-1'>
            <div className='text-white pb-8'>
              <BsEmojiSmileFill size={60} />
            </div>
            <span className='text-7xl font-bold md:text-4xl'>
              <AnimatedNumber value={'1500'} />+
            </span>
            <h1 className='text-[1.1rem] uppercase font-ptSans leading-relaxed'>Happy Patient</h1>
          </div>

          <div className='flex flex-col space-y-3 items-center justify-center md:space-y-1'>
            <div className='text-white pb-7'>
              <FaUsersCog size={80} />
            </div>
            <span className='text-7xl font-bold md:text-4xl'>
              <AnimatedNumber value={'689'} />+
            </span>
            <h1 className='text-[1.2rem] font-ptSans leading-relaxed'>OUR SERVICES</h1>
          </div>

          <div className='flex flex-col space-y-3 items-center justify-center md:space-y-1'>
            <span className='text-7xl font-bold md:text-4xl'>
              <AnimatedNumber value={'100'} />+
            </span>
            <h1 className='text-[1.2rem]  text-dark/75 dark:text-light/75 md:text-center'>OUR DOCTOR</h1>
          </div>

          <div className='flex flex-col items-center justify-center space-y-3 md:space-y-1'>
            <div>
              <GiPlagueDoctorProfile size={80}/>
            </div>
            <span className='text-7xl font-bold md:text-4xl'>
              <AnimatedNumber value={'20'} />+
            </span>
            <h1 className='text-[1.2rem]  text-dark/75 dark:text-light/75 md:text-center'>SERVICE POINT</h1>
          </div>

        </div>
      </div>
    </section>
  </>
}

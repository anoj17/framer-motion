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

    <section className="lg:h-screen w-full py-14 lg:py-4">
      <motion.div className="flex flex-col items-center space-y-3 justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-green-500 leading-5 font-semibold font-monts uppercase">About US</h1>
        <h1 className="text-gray-500 font-extrabold font-play text-2xl md:text-3xl lg:text-5xl">The World's Best Treatment In Our Hospital</h1>
        <div className="flex justify-center items-center space-x-6">
          <div className="h-[1px] w-10 bg-black"></div>
          <div className="text-green-500">
            <FaHeartbeat size={25} />
          </div>
          <div className="h-[1px] w-10 bg-black"></div>
        </div>
      </motion.div>
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
            <button className="py-2 px-4 bg-green-500 text-white rounded-full">Contact US</button>
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
  </>
}

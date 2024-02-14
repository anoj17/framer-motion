"use client";

import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion"
import logo from "../../../public/logo.webp"
import Image from 'next/image';
import NavigationMenu from "./NavigationMenu"
import { Fullscreen } from 'lucide-react';

const NavBar = () => {
    const [isHamChange, setIsHamChange] = useState(false)
    const [isHomeDrop, setIsHomeDrop] = useState(false)
    const [isPageDrop, setIsPageDrop] = useState(false)

    const onChangeHome = () => {
        setIsHomeDrop(true)
        setIsPageDrop(false)
    }
    const clickPage = () => {
        setIsPageDrop(true)
        setIsHomeDrop(false)

    }
    return <>

        <div>
            <div className='w-full hidden lg:flex text-white justify-between items-center overflow-hidden bg-green-700 lg:px-28'>
                <div className='flex'>
                    <motion.div className='flex group py-[14px] space-x-3 px-3 justify-center items-center cursor-pointer border-l border-r border-gray-400'
                        whileHover={{ backgroundColor: '#444' }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaFacebookF size={15} />
                        <div className='hidden group-hover:block text-[10px] font-semibold'>Facebook</div>
                    </motion.div>
                    <motion.div className='flex group py-3 space-x-3 px-3  justify-center items-center cursor-pointer border-r border-gray-400'
                        whileHover={{ backgroundColor: '#FF0000', transition: { duration: 0.5 } }}
                    >
                        <FaYoutube size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Youtube</div>
                    </motion.div>
                    <motion.div className='flex group py-3 space-x-3 px-3 justify-center items-center cursor-pointer border-r border-gray-400'
                        whileHover={{ backgroundColor: '#90EE90', transition: { duration: 0.5 } }}
                    >
                        <FaTwitter size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Twitter</div>
                    </motion.div>
                    <motion.div className='flex group py-3 space-x-3 px-3 justify-center items-center cursor-pointer border-r border-gray-400'
                        whileHover={{ backgroundColor: '#FF0000', transition: { duration: 0.5 } }}
                    >
                        <FaInstagram size={15} />
                        <div className='hidden group-hover:block text-[.7rem] font-semibold'>Instagram</div>
                    </motion.div>
                </div>
                <div className='flex space-x-3 '>
                    <div className='flex items-center space-x-1'>
                        <FaMobileAlt size={15} />
                        <div className='text-[.8rem]'>+123-456-7890</div>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <FaRegCommentAlt size={15} />
                        <div className='text-[.8rem]'>info@example.com </div>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <FaLocationPin size={15} />
                        <div className='text-[.8rem]'>1234 Elm Street</div>
                    </div>
                </div>
            </div>
            <div className='lg:px-20 py-4 px-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src={logo} alt='' height={35} width={140} />
                    </div>
                    <div className='hidden lg:flex items-center justify-center'>
                        <NavigationMenu />
                        <div className='flex space-x-3 pl-3 justify-center items-center'>
                            <div className='text-gray-500 hidden xl:block cursor-pointer'>
                                <IoSearch size={20} />
                            </div>
                            <button className="text-[12px] py-2 font-semibold text-white px-6 rounded-3xl font-mont bg-green-800">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                    <div className='lg:hidden'>
                        <div className='flex space-x-3 pl-3 justify-center items-center'>
                            <div className='text-gray-700 cursor-pointer'>
                                <IoSearch size={20} />
                            </div>
                            <div className='text-gray-700' onClick={() => setIsHamChange(!isHamChange)}>
                                {
                                    !isHamChange ?
                                        <GiHamburgerMenu size={20} /> :
                                        <ImCross size={20} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div className={`${isHamChange ? "blok" : "hidden"} bg-gray-700 font-pop text-[13px] overflow-y-scroll text-gray-400`}
                initial={{ height: 0 }}
                animate={{ height: '140px' }}
                transition={{ duration: 1.5 }}
            >
                <div>
                    <div>
                        <div className='border-b border-gray-400 pl-3 flex justify-between items-center' onClick={onChangeHome}>
                            <div>HOME</div>
                            <div className='border-l border-gray-400 px-4 py-4'>
                                <FaPlus size={15} />
                            </div>
                        </div>
                        <div className={`${isHomeDrop ? "flex" : "hidden"} flex-col`}>
                            <div className='border-b border-gray-400 py-3 pl-3'>HOMEPAGE1</div>
                            <div className='border-b border-gray-400 py-3 pl-3'>HOMEPAGE2</div>
                            <div className='border-b border-gray-400 py-3 pl-3'>HOMEPAGE3</div>
                            <div className='border-b border-gray-400 py-3 pl-3'>HOMEPAGE4</div>
                        </div>
                    </div>
                    <div className='border-b border-gray-400 pl-3 flex justify-between items-center' onClick={clickPage}>
                        <div>PAGE</div>
                        <div className='border-l border-gray-400 px-4 py-4'>
                            <FaPlus size={15} />
                        </div>
                    </div>
                    <div className={`${isPageDrop ? "flex" : "hidden"} flex-col`}>
                        <div className='border-b border-gray-400 py-3 pl-3'>ABOUT US</div>
                        <div className='border-b border-gray-400 py-3 pl-3'>ABOUT US (NEW)</div>
                        <div className='border-b border-gray-400 py-3 pl-3'>OUR TEAMS</div>
                        <div className='border-b border-gray-400 py-3 pl-3'>OUR DEPARTMENTS</div>
                        <div className='border-b border-gray-400 py-3 pl-3'>PRICING PLAN</div>
                        <div className='border-b border-gray-400 pl-3 flex justify-between items-center' onClick={onChangeHome}>
                            <div>GALLERY</div>
                            <div className='border-l border-gray-400 px-4 py-4'>
                                <FaPlus size={15} />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 pl-3 flex justify-between items-center' onClick={onChangeHome}>
                            <div>BLOG</div>
                            <div className='border-l border-gray-400 px-4 py-4'>
                                <FaPlus size={15} />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 pl-3 flex justify-between items-center' onClick={onChangeHome}>
                            <div>CONTACT</div>
                            <div className='border-l border-gray-400 px-4 py-4'>
                                <FaPlus size={15} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='border-b border-gray-400 py-3 pl-3'>
                    BOOK APPOINTMENT
                </div>

            </motion.div>
        </div>

    </>
}

export default NavBar
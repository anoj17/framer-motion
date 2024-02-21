import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { FaHeartbeat } from "react-icons/fa";

interface iappPrpos {
    heading: string,
    head: string
}
const TopSection = ({ heading, head }: iappPrpos) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div className="flex flex-col items-center lg:py-5 space-y-3 justify-center"
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-green-500 leading-5 font-semibold font-monts uppercase">{head}</h1>
            <h1 className="text-gray-500 font-extrabold font-play text-2xl md:text-3xl lg:text-5xl">{heading}</h1>
            <div className="flex justify-center items-center space-x-6">
                <div className="h-[1px] w-10 bg-black"></div>
                <div className="text-green-500">
                    <FaHeartbeat size={25} />
                </div>
                <div className="h-[1px] w-10 bg-black"></div>
            </div>
        </motion.div>
    )
}

export default TopSection
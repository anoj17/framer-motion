"use client";

import { motion } from "framer-motion"
import { FaHeartbeat } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="h-screen w-full">
      <div style={{ backgroundImage: `url(/home.webp)`, height: "100%", width: "100%", backgroundSize: "cover" }} className="absolute">
        <div className="relative pl-28 pr-60 flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-gray-600/50">
          <div className=" z-1000 opacity-100">
            <motion.h1 className="font-play text-[6rem] leading-tighter text-white font-extrabold"
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >The Right Pediatrician</motion.h1>
            <motion.p className="text-[1.3rem] leading-8 -mt-3 font-mont text-white"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: .5 }}
            >We at Dr life Saver always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</motion.p>
            <div>
              <motion.div className="flex space-x-3 items-center text-white py-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <FaHeartbeat size={50} />
                <div>
                  <h1 className="text-[1.7rem] font-semibold leading-6 font-int">REGULAR CHECKUPS</h1>
                  <p className="text-[.9rem]">Praesent convallis tortor et enim laoreet, consectetur.</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <div className="flex space-x-3 items-center text-white">
                <FaMobileScreenButton size={50} />
                <div>
                  <h1 className="text-[1.7rem] font-semibold leading-6 font-int">ALWAYS AVAILABLE</h1>
                  <p className="text-[.9rem]">Praesent convallis tortor et enim laoreet, consectetur.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

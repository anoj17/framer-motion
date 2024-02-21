"use client";

import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef } from 'react'


const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0)
    const spring = useSpring(motionValue, { duration: 3000 })
    const inView = useInView(ref)

    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        }
    }, [inView, motionValue, value])

    useEffect(() => {
        spring.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [spring, value])

    return (
        <span ref={ref}></span>
    )
}

export default AnimatedNumber
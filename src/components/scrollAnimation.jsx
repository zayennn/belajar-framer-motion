import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function ScrollAnimation() {

    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, -100])

    return (
        <motion.div style={{ y }} >
            Parallax like a boss
        </motion.div>

    )
}
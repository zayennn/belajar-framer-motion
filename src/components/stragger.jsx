import React from 'react'
import { motion } from 'framer-motion'

export const stragger = () => {

    const parents = {
        show: {
            transition: {
                straggerChildren: 0.2
            }
        }
    }

    const child = {
        hidden: { opacity: 0 , y: 50 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.ul
            variants={parents}
            initial="hidden"
            animate="show"
        >
            {[1, 2, 3].map(i => (
                <motion.li key={i} variants={child}>
                    item {i}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default stragger
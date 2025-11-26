import React from 'react'
import { motion } from 'framer-motion'

export const card = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className='card'
            variants={cardVariants}
            initial="hidden"
            animate="show"
        ></motion.div>
    )
}

export default card
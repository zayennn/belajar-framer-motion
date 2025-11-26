import React from 'react'
import { motion } from 'framer-motion'

export default function dragGesture() {
    return (
        <motion.div drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} className='seret'>
            seret aku
        </motion.div>
    )
}
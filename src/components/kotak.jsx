import React from 'react'
import { motion } from 'framer-motion'

export const kotak = () => {
    return (
        <motion.div
            className='kotak'

            // inisialisasi awal dan akhir
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}

            // hover
            whileHover={{ scale: 1.1, backgroundColor: 'skyblue' }}

            // tap
            whileTap={{ scale: .8 }}

            // transitions
            transition={{ duration: .3 }}
        ></motion.div>
    )
}

export default kotak
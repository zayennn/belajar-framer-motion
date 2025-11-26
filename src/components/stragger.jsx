import React from 'react'
import { motion } from 'framer-motion'
import { h3, span } from 'framer-motion/client'

export const stragger = () => {

    const parent = {
        show: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const child = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    }

    let name = "Elang Atha Zahran"
    let arrOfName = [...name]

    return (
        <>
            <h3>halo nama saya, </h3>
            <motion.ul
                variants={parent}
                initial="hidden"
                animate="show"
                style={{ display: 'flex', padding: 0 }}
            >
                {arrOfName.map((char, i) => {
                    if (char === " ") {
                        return (
                            <span key={i} style={{ width: "5px" }}></span>
                        )
                    }

                    return (
                        <motion.h1
                            key={i}
                            variants={child}
                            style={{ margin: 0 }}
                        >
                            {char}
                        </motion.h1>
                    )
                })}
            </motion.ul>
        </>
    )
}

export default stragger
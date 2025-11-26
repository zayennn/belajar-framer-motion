import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { h1, span, title } from 'framer-motion/client'

function WhileInView() {

    let sectionTitle = ["Home Section", "About Section", "Projects Section", "Contact Section"]

    const titlesAsChars = sectionTitle.map(title => [...title])

    const homeSection = titlesAsChars[0]
    const aboutSectoin = titlesAsChars[1]
    const projectsSection = titlesAsChars[2]
    const contactSection = titlesAsChars[3]

    let parent = {
        show: {
            transition: {
                staggerChildren: .1
            }
        }
    }

    let child = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <>
            <motion.section
                className='section'
                variants={parent}
                initial="hidden"
                animate="show"
                style={{ display: 'flex' }}
            >
                {homeSection.map((char, index) => {
                    if (char === " ") {
                        return (
                            <span key={index} style={{ width: '8px' }}></span>
                        )
                    }

                    return (
                        <motion.h1
                            key={index}
                            variants={child}
                            viewport={{ once: true, amount: .1 }} // muncul pas 10% dari view
                            initial="hidden"
                            whileInView="show"
                        >
                            {char}
                        </motion.h1>
                    )
                })}
            </motion.section>

            <motion.section
                className='section'
                variants={parent}
                initial="hidden"
                animate="show"
                style={{ display: 'flex' }}
            >
                {aboutSectoin.map((char, index) => {
                    if (char === " ") {
                        return (
                            <span key={index} style={{ width: '8px' }}></span>
                        )
                    }

                    return (
                        <motion.h1
                            key={index}
                            variants={child}
                            viewport={{ once: true, amount: 0.5 }} // muncul pas 50% dari view
                            initial="hidden"
                            whileInView="show"
                        >
                            {char}
                        </motion.h1>
                    )
                })}
            </motion.section>
        </>
    )
}

export default WhileInView
import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const transition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '10%'
    }
}

function Projects() {
    return (
        <div className='projects-container'>
            <div className='projects-container'>
                <div className='projects'>
                    <a href='https://official-carledwardfp.github.io/practice-project-todo/' target='_blank' rel="noreferrer">
                        <motion.div className='project'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={transition}
                            transition={{duration: .5, stiffness: 1000}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/practice-project-todo.png'} alt='todo'/>
                            <div className='project-text'>
                                <h1>Simple Todo App</h1>
                                <h2>&lt;Practice Project&gt;</h2>
                            </div>
                            <p>Made with:</p>
                            <div className='languages'>
                                <img src={process.env.PUBLIC_URL+'/images/react.png'}  alt='react'/>
                                <img src={process.env.PUBLIC_URL+'/images/css.png'}  alt='css'/>
                            </div>
                        </motion.div>
                    </a>

                    <a href='https://official-carledwardfp.github.io/practice-project-stockm/' target='_blank' rel="noreferrer">
                        <motion.div className='project'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={transition}
                            transition={{duration: .5, stiffness: 1000, delay: 0.25}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/practice-project-stockm.png'} alt='todo'/>
                            <div className='project-text'>
                                <h1>BTC/Stock Market</h1>
                                <h2>&lt;Practice Project&gt;</h2>
                            </div>
                            <p>Made with:</p>
                            <div className='languages'>
                                <img src={process.env.PUBLIC_URL+'/images/react.png'}  alt='react'/>
                                <img src={process.env.PUBLIC_URL+'/images/axios.png'}  alt='axios'/>
                                <img src={process.env.PUBLIC_URL+'/images/chartjs.png'}  alt='chartjs'/>
                            </div>
                        </motion.div>
                    </a>

                    <a href='https://official-carledwardfp.github.io/practice-project-weatherapp/' target='_blank' rel="noreferrer">
                        <motion.div className='project'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={transition}
                            transition={{duration: .5, stiffness: 1000, delay: 0.5}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/practice-project-weather.png'} alt='weatherapp'/>
                            <div className='project-text'>
                                <h1>Weather App</h1>
                                <h2>&lt;Practice Project&gt;</h2>
                            </div>
                            <p>Made with:</p>
                            <div className='languages'>
                                <img src={process.env.PUBLIC_URL+'/images/react.png'}  alt='react'/>
                                <img src={process.env.PUBLIC_URL+'/images/axios.png'}  alt='axios'/>
                            </div>
                        </motion.div>
                    </a>

                    <a href='https://official-carledwardfp.github.io/practice-project-githubcard/' target='_blank' rel="noreferrer">
                        <motion.div className='project'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={transition}
                            transition={{duration: .5, stiffness: 1000, delay: 0.75}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/practice-project-githubcard.png'} alt='githubcard'/>
                            <div className='project-text'>
                                <h1>Github Card</h1>
                                <h2>&lt;Practice Project&gt;</h2>
                            </div>
                            <p>Made with:</p>
                            <div className='languages'>
                                <img src={process.env.PUBLIC_URL+'/images/react.png'}  alt='react'/>
                                <img src={process.env.PUBLIC_URL+'/images/axios.png'}  alt='axios'/>
                            </div>
                        </motion.div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Projects
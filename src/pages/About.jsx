/* eslint-disable react/no-unescaped-entities */
import { section } from 'framer-motion/client'
import project1 from '../assets/images/proj1.jpg'
import project2 from '../assets/images/proj2.jpg'

export default function About() {
  return (
    <section id="about" className="text-white  p-8">
        <h2 className="text-6xl  font-bold mb-8">
             About <span className="text-emerald-300">
                 Me</span>
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-white/20 rounded-lg p-6">
                     <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                     <p className="text-white/50 mb-6" >
                     I am a passionate full-stack developer with a strong 
                     foundation in computer science and a love for creating 
                     innovative web solutions. My journey in tech started 
                     with a curiosity about how things work, which led me to
                      pursue a career in web development.</p>
                      
                    <div className="rounded-lg p-4 mb-4 border border-white/20" >
                    
                        <code className="text-emerald-200/50" >
                        const skills = [<br/>
                        &nbsp;&nbsp;'JavaScript',
                        <br/>
                        &nbsp;&nbsp;'Python',
                        <br/>
                        &nbsp;&nbsp;'Django',
                        <br/>
                        &nbsp;&nbsp;'Docker',
                        <br/>
                        &nbsp;&nbsp;'SQL/No-SQL',
                        <br/>
                        &nbsp;&nbsp;'AWS'
                        <br/>];
                        </code>
                    </div>
                </div>
             

        



            </div>

    </section>
  )
}


import { motion } from 'framer-motion';
import profilepic from '../assets/images/profilepic.png';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-gradient-to-b from-black via-[#071E18] to-[#35FB8E]">
      {/* Background Decoration */}
      <div
        className="absolute w-[2400px] h-[1000px] rounded-[50%] bg-[radial-gradient(closest-side,#000_85%,#249974)] border border-[#8CD6DE]/30
        left-1/2 top-[450px] -translate-x-1/2"
      />

      {/* Container */}
      <div className="relative container mx-auto px-6 pt-12 pb-24">
        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center z-10">
          {/* Profile Picture Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profilepic}
              alt="Mike"
              className="w-[250px] h-[250px] rounded-full relative z-10 border-4 border-emerald-500 shadow-lg"
            />
          </motion.div>

          {/* Introduction and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
              Hi, I am <br /> <span className="text-emerald-400">Mike Absai</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              A Visionary  Back-End developer eager to create impactful applications that inspire and innovate.
            </p>
            <div className="flex gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-emerald-600 rounded-full font-medium shadow-lg hover:bg-emerald-700 transition-transform"
              >
                Contact Me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 border border-white/20 rounded-full font-medium shadow-md hover:bg-white/10 transition-transform"
              >
                View Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Animation Effect */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-2xl"
        />

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/50 pointer-events-none"></div>
      </div>
    </div>
  );
}

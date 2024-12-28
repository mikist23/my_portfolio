import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Footer() {
  
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Get in <span className="text-emerald-400">Touch</span>
            </h2>
            <motion.a
              href="mailto:mikeochango3@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block px-8 py-4 text-lg md:text-2xl font-medium bg-emerald-500 text-gray-900 rounded-lg shadow-lg hover:bg-emerald-400 transition-transform duration-300"
            >
              Email Me
            </motion.a>
          </div>
        </div>

        {/* Background Name */}
        <div className="relative text-center mt-12">
          <h1 className="hidden md:block text-[8rem] lg:text-[12rem] font-bold text-white/10">
            MIKE ABSAI
          </h1>
          <h1 className="md:hidden text-6xl font-bold text-white/10">MIKE ABSAI</h1>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <AiFillGithub size={40} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <AiFillInstagram size={40} />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <AiFillFacebook size={40} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <AiOutlineTwitter size={40} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © Mike Absai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
import { FiArrowUpRight } from "react-icons/fi";
import hme from "../assets/hme.mp4";
import { motion } from "framer-motion";
import logo from "../assets/bur.png"; // <-- Add your logo path here

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 lg:pt-25 pb-20 overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={hme}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      </div>

      {/* Floating Soft Glow */}
      <motion.div 
        className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/20 to-orange-400/20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Logo at Top */}
      <motion.div
        className="relative z-10 mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={logo} 
          alt="AL Burraq Marketing Logo" 
          className="w-32 h-auto sm:w-36 md:w-60"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl w-full space-y-6">

        {/* Company Name */}
        <motion.h2 
          className="text-3xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 relative inline-block"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          AL Burraq Marketing
          <span className="absolute left-0 -bottom-5 w-full h-1.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-full animate-pulse"></span>
        </motion.h2>

        {/* Heading */}
        <motion.h1 
          className="text-2xl sm:text-4xl lg:text-3xl font-bold text-white leading-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Invest With Confidence <span className="text-orange-500">.</span>
        </motion.h1>

        {/* Buttons */}
        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a href="#ourprocess" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 shadow-2xl hover:scale-105 hover:shadow-orange-500/50 transition-transform duration-300">
              View Properties
            </button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors duration-300">
              Schedule Consultation <FiArrowUpRight />
            </button>
          </a>
        </motion.div>

        {/* Reviews */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex -space-x-3">
            <img src="https://i.pravatar.cc/40?img=1" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=2" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=3" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-semibold border-2 border-white">+3K</div>
          </div>
          <div className="flex items-center gap-2 text-gray-100 text-sm sm:text-base">
            ⭐⭐⭐⭐⭐ <span className="text-gray-300 text-xs sm:text-sm"> Trusted by 3,000+ Investors </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
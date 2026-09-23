import profileImage from '../assets/profile.jpeg';
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#F7FCFF] px-6 py-20 flex items-center dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#657786] dark:text-slate-300 text-lg mb-3">
            Hi, I'm Vishesh
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#263746] dark:text-slate-100 leading-tight">
            Data Analyst &{" "}
            <span className="text-[#8EC5E8]">
              Business Intelligence
            </span>{" "}
            Enthusiast
          </h1>

          <p className="mt-6 text-lg text-[#657786] dark:text-slate-300 leading-relaxed max-w-xl">
            I work with data to build dashboards, uncover insights and support better business decisions using Python, SQL and Power BI.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#DDD6F3] dark:border-slate-600 text-[#263746] dark:text-slate-100 font-semibold hover:bg-[#DDD6F3] dark:hover:bg-slate-800 transition-colors"
            >
              Explore My Projects
              <FiArrowRight />
            </a>

            <a
              href="https://github.com/visheshgaur17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#DDD6F3] text-[#263746] font-semibold hover:bg-[#DDD6F3] transition-colors"
            >
              <FiGithub />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#DDD6F3] rounded-full blur-xl opacity-25 scale-105" />
            {/* Analytics decoration */}
            <div className="absolute -right-6 top-8 z-10 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700 shadow-md backdrop-blur-sm">
              <span className="text-sky-500 text-sm">↗</span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Data → Insights
              </span>
            </div>
            <img
              src={profileImage}
              alt="Vishesh"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-xl"
            />
            
          </div>
        </motion.div>

            </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-sky-500 transition-colors"
      >
        <span className="text-xs tracking-[0.2em] uppercase">
          Scroll to explore
        </span>

        <span className="text-lg animate-bounce">
          ↓
        </span>
      </a>
    </section>
  );
};

export default Hero;
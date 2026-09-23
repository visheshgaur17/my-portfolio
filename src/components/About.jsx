import { motion } from "framer-motion";
import { User, Code2, Target } from "lucide-react";
import { fadeUp } from "../utils/motion";
import { FiUser, FiBarChart2, FiTarget } from "react-icons/fi";
const cards = [
  {
    title: "Who I Am",
    text: "A data analyst with hands-on experience in reporting, financial data, dashboards and business analysis, with a strong focus on turning raw data into useful insights.",
    icon: FiUser
  },
  {
    title: "What I Do",
    text: "I work with SQL, Python, Excel and Power BI to clean, analyze and visualize data, build dashboards and answer practical business questions.",
    icon: FiBarChart2
  },
  {
    title: "Current Focus",
    text: "Building deeper expertise in data analytics, business intelligence and machine learning while developing end-to-end projects using real-world datasets.",
    icon: FiTarget
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-8 md:px-24 bg-white dark:bg-slate-800">
      <h2 className="text-4xl font-serif font-bold text-center text-sky-800 dark:text-sky-200 mb-4">
        About Me
      </h2>
      <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
        A little about my background, approach to data and the direction I'm building toward.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            variants={fadeUp}
            className="group bg-sky-50 dark:bg-slate-700 rounded-2xl p-7 shadow-md border border-sky-100 dark:border-slate-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <card.icon className="w-8 h-8 text-sky-500 mb-3 transition-transform duration-300 group-hover:scale-110" />
            
            <h3 className="text-xl font-serif font-bold text-sky-700 dark:text-sky-300 mb-3">
              {card.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
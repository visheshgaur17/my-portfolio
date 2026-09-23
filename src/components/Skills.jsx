import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";
import {
  FiDatabase,
  FiBarChart2,
  FiPieChart,
  FiActivity,
  FiTool
} from "react-icons/fi";
const skillGroups = [
  {
    title: "Data Analysis",
    icon: FiDatabase,
    skills: ["SQL", "Advanced Excel", "Python", "Pandas", "NumPy"]
  },
  {
    title: "Business Intelligence",
    icon: FiBarChart2,
    skills: ["Power BI", "DAX", "Power Query", "Dashboard Development"]
  },
  {
    title: "Data Visualization",
    icon: FiPieChart,
    skills: ["Power BI", "Tableau", "Matplotlib"]
  },
  {
    title: "Analytics & ML",
    icon: FiActivity,
    skills: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Machine Learning",
      "Sentiment Analysis"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: FiTool,
    skills: ["Databricks","Git", "GitHub", "Microsoft Excel", "SharePoint", "SAP"]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-8 md:px-24 bg-sky-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-serif font-bold text-center text-sky-800 dark:text-sky-200 mb-4">
          Skills
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
          Technologies and analytical skills I use to turn data into
          meaningful insights and business solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
                    key={group.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    variants={fadeUp}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                                                      >
              <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-slate-700 flex items-center justify-center text-sky-500">
                      <group.icon size={20} />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-sky-700 dark:text-sky-300">
                      {group.title}
                    </h3>
                  </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-sky-100 dark:bg-slate-700 text-sky-700 dark:text-sky-200 text-sm font-medium hover:scale-110 hover:bg-sky-200 dark:hover:bg-slate-600 transition-transform cursor-default"
                          >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
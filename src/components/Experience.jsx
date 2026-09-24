import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    role: "Data Analyst",
    company: "Maruti Suzuki Research Centre (via Diensten Tech. Ltd.)",
    year: "2026",
    description:
      "Worked on business reporting and data analysis using SAP, Excel and Power BI. Built dashboards, worked with vendor and transaction data, and supported reporting and analysis activities.",
    tags: ["Power BI", "Excel", "SAP", "Data Analysis"],
  },
  {
    role: "Credit Controller",
    company: "Labcorp Diagnostics",
    year: "2024",
    description:
      "Managed payment tracking, financial records and MIS reporting. Used Excel for financial analysis, monitoring and reporting across business operations.",
    tags: ["Excel", "MIS Reporting", "Financial Analysis", "Reporting"],
  },
  {
    role: "Trainee",
    company: "Gunvatta Gurukul",
    year: "2025",
    description:
      "Gained practical exposure to project management, data handling, business reporting, Power BI and professional workplace practices through structured projects and training.",
    tags: ["Power BI", "Excel", "Project Management", "Reporting"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-label">CAREER JOURNEY</p>
        <h2>Experience</h2>
        <p className="section-subtitle">
          My professional experience across data analysis, reporting and
          business operations.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.role}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <div className="timeline-marker">
              <FiBriefcase />
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                </div>

                <span>{experience.year}</span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
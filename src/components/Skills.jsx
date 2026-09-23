const skillGroups = [
  {
    title: "Data Analysis",
    skills: ["SQL", "Advanced Excel", "Python", "Pandas", "NumPy"]
  },
  {
    title: "Business Intelligence",
    skills: ["Power BI", "DAX", "Power Query", "Dashboard Development"]
  },
  {
    title: "Data Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib"]
  },
  {
    title: "Analytics & ML",
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
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-serif font-bold text-sky-700 dark:text-sky-300 mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-sky-100 dark:bg-slate-700 text-sky-700 dark:text-sky-200 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import mlPredictions from "../assets/projects/ml-predictions.png";
import newsSentiment from "../assets/projects/news-sentiment.png";
import overview from "../assets/projects/overview.png";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <section id="projects" className="projects-section dark:bg-slate-950">
      <div className="section-heading">
        <p className="section-label">Portfolio</p>
        <h2>Featured Project</h2>
        <p className="section-subtitle">
          A complete machine learning and financial analytics project built
          using Python, SQL, Power BI and machine learning.
        </p>
      </div>

      <div className="project-card hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
        <div className="project-images">
          <img
            src={mlPredictions}
            alt="ML Predictions dashboard"
            className="main-project-image"
          />

          <div className="project-thumbnails">
            <img
              src={newsSentiment}
              alt="News and sentiment dashboard"
              onClick={() => setSelectedImage(newsSentiment)}
              className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            />

            <img
              src={overview}
              alt="Stock analytics overview dashboard"
              onClick={() => setSelectedImage(overview)}
              className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        <div className="project-content">
          <p className="project-type">DATA ANALYTICS · MACHINE LEARNING</p>

          <h3>Stock Market Analytics</h3>

          <p className="project-description">
            ML Prediction & Sentiment Dashboard
          </p>

          <p>
            An end-to-end stock market analytics project combining historical
            market data, technical indicators, financial news sentiment
            analysis and machine learning predictions.
          </p>

          <div className="project-tools">
            <span className="project-tool">Python</span>
            <span className="project-tool">SQL</span>
            <span className="project-tool">Power BI</span>
            <span className="project-tool">Machine Learning</span>
            <span className="project-tool">VADER</span>
          </div>

          <a
  href="https://github.com/visheshgaur17/stock-market-ml-sentiment-dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="project-button"
>
  View Project
</a>
        </div>
            </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-sky-300 transition-colors"
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Project screenshot"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
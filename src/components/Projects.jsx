import mlPredictions from "../assets/projects/ml-predictions.png";
import newsSentiment from "../assets/projects/news-sentiment.png";
import overview from "../assets/projects/overview.png";

function Projects() {
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

      <div className="project-card">
        <div className="project-images">
          <img
            src={mlPredictions}
            alt="ML Predictions dashboard"
            className="main-project-image"
          />

          <div className="project-thumbnails">
            <img src={newsSentiment} alt="News and sentiment dashboard" />
            <img src={overview} alt="Stock analytics overview dashboard" />
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
            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>Machine Learning</span>
            <span>VADER</span>
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
    </section>
  );
}

export default Projects;
function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Vishesh Gaur</h3>
        <p>
          Data Analyst | Business Intelligence | Machine Learning
        </p>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Vishesh Gaur. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
const Hero = () => {
  return (
    <section id="hero" className="hero-section fade-in">
      <div className="hero-container">
        <div className="hero-content">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Prince Patel</h1>
          <h2 className="title">
            Full-Stack Developer · Backend Systems · AI Applications · Problem
            Solving
          </h2>
          <p className="summary">
            I’m a third-year B.Tech Computer Science student at Nirma University
            (CGPA: 8.96/10), building projects such as Cortex, an observability
            and root cause analysis platform, and MiniDB, a lightweight database
            engine in C++. I’ve also solved 290+ LeetCode problems and continue
            strengthening my software engineering fundamentals.
          </p>
          <div className="hero-actions">
            <a
              href="Prince_Patel_Resume.pdf"
              className="btn btn-primary"
              download
            >
              Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Work
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="/Profile_Photo.jpeg"
            alt="Prince Patel"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Hero = () => {
    return (
        <section id="hero" className="hero-section fade-in">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="name">Prince Patel</h1>
                    <h2 className="title">Computer Science & Engineering Student</h2>
                    <p className="summary">Aspiring Software Engineer with a passion for building robust backend systems, scalable applications, and diving deep into algorithms and data structures.</p>
                    <div className="hero-actions">
                        <a href="Prince_Patel_Resume.pdf" className="btn btn-primary" download>Download Resume</a>
                        <a href="#projects" className="btn btn-secondary">View Work</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src="/Profile_Photo.jpeg" alt="Prince Patel" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

const Skills = () => {
    return (
        <section id="skills" className="section fade-in">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
                <div className="skill-card glass-card">
                    <h3>Programming</h3>
                    <p>C++, JavaScript, Python, C, Java</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Frontend</h3>
                    <p>React.js, HTML, CSS</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Backend</h3>
                    <p>Node.js, Express.js, JWT Authentication, REST APIs, Socket.io</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Databases & Tools</h3>
                    <p>PostgreSQL, MySQL, MongoDB, pgvector, Git, GitHub</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>AI & ML</h3>
                    <p>XGBoost, Vector Search (pgvector), RAG, Feature Engineering, Machine Learning Fundamentals</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Core CS</h3>
                    <p>DSA, DBMS, OOP, Computer Networks, Operating Systems</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;

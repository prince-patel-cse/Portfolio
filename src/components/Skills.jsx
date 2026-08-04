const Skills = () => {
    return (
        <section id="skills" className="section fade-in">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
                <div className="skill-card glass-card">
                    <h3>Programming</h3>
                    <p>C++, Java, Script, Python, C</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Web Development</h3>
                    <p>Node.js, React.js, Express.js, HTML, CSS</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Databases</h3>
                    <p>PostgreSQL, MySQL, MongoDB</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>AI & ML</h3>
                    <p>XGBoost, Vector Search (pgvector), RAG, Feature Engineering</p>
                </div>
                <div className="skill-card glass-card">
                    <h3>Tools & Core CS</h3>
                    <p>Git, GitHub, DSA, DBMS, OOP, CN, OS, System Design</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import { Code2 } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section fade-in">
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="project-card glass-card">
                <div className="project-header">
                    <h3>Cortex - Distributed Observability and RCA Platform</h3>
                    <span className="project-date">July - August 2026</span>
                </div>
                <ul className="project-details">
                    <li>Built a real-time observability platform using React, Node.js, PostgreSQL, and Socket.io for 10 microservices and 11 failure scenarios, streaming telemetry every 3s.</li>
                    <li>Implemented a deterministic RCA engine using request correlation, span reconstruction, and evidence scoring to generate a ranked root-cause diagnosis.</li>
                    <li>Developed an ML + RAG remediation pipeline training 3 XGBoost models on 200K+ records and integrating 3,072-dimensional pgvector embeddings.</li>
                </ul>
                <div className="project-links mt-4">
                    <a href="https://github.com/VrajPrajapati6/Cortex-AI" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <Code2 size={18} /> GitHub
                    </a>
                </div>
            </div>

            <div className="project-card glass-card">
                <div className="project-header">
                    <h3>MiniDB - Lightweight SQL Engine</h3>
                    <span className="project-date">June 2026</span>
                </div>
                <ul className="project-details">
                    <li>Built a lightweight SQL engine from scratch supporting 10 SQL-like commands (CRUD, WHERE filtering, indexing, pagination, HISTORY, ROLLBACK).</li>
                    <li>Designed an incremental versioning mechanism enabling efficient retrieval and restoration of previous database states.</li>
                    <li>Tech Stack: C++, STL, File I/O</li>
                </ul>
                <div className="project-links mt-4">
                    <a href="https://github.com/prince-patel-cse/MiniDB" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <Code2 size={18} /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

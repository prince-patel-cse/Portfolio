import { Code2 } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section fade-in">
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="project-card glass-card">
                <div className="project-header">
                    <h3>Cortex - Distributed Observability and Root Cause Analysis Platform</h3>
                    <span className="project-date">Jul 2026 - Present</span>
                </div>
                <ul className="project-details">
                    <li>Built a real-time observability platform using React, Node.js, PostgreSQL, and Socket.io to monitor latency and failures across 10 microservices, streaming telemetry at 3-second intervals.</li>
                    <li>Implemented request correlation, tracing, and dependency analysis to identify root causes across 11 simulated failure scenarios.</li>
                    <li>Developed an ML + RAG remediation pipeline by training 3 XGBoost models on 200K+ simulated telemetry records and integrating pgvector-based retrieval to generate context-aware recovery guidance.</li>
                </ul>
                <div className="project-links mt-4">
                    <a href="https://github.com/VrajPrajapati6/Cortex-AI" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <Code2 size={18} /> GitHub
                    </a>
                </div>
            </div>

            <div className="project-card glass-card">
                <div className="project-header">
                    <h3>MiniDB - Lightweight SQL Engine with Time-Travel Queries</h3>
                    <span className="project-date">Jun 2026</span>
                </div>
                <ul className="project-details">
                    <li>Built a lightweight SQL engine from scratch supporting 10 SQL-like commands, including CRUD operations, WHERE filtering, indexing, pagination, HISTORY, and ROLLBACK.</li>
                    <li>Designed an incremental versioning mechanism enabling efficient retrieval and restoration of previous database states.</li>
                    <li>Implemented query parsing and execution using custom data structures and file-based storage.</li>
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

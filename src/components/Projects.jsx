import { Code2, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section fade-in">
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="project-card glass-card">
                <div className="project-header">
                    <h3>Cortex - Distributed Observability and Root Cause Platform</h3>
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
                    <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <ExternalLink size={18} /> Live Demo
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
                    <li>Tech Stack: C++, STL, File I/O</li>
                </ul>
                <div className="project-links mt-4">
                    <a href="https://github.com/prince-patel-cse/MiniDB" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <Code2 size={18} /> GitHub
                    </a>
                </div>
            </div>

            <h2 className="subsection-title" style={{ marginTop: '5rem' }}>Additional Projects</h2>

            <div className="additional-projects-grid">
                <div className="project-card glass-card">
                    <div className="project-header">
                        <h3>EcoDrive - Enterprise Smart Mobility Platform</h3>
                    </div>
                <ul className="project-details">
                    <li>Built a full-stack enterprise carpooling platform supporting organization-based authentication, ride management, employee dashboards, and secure access control for streamlined mobility operations.</li>
                    <li>Implemented real-time ride coordination using Socket.IO with integrated chat, live location tracking, and ride status synchronization to enhance collaboration between drivers and passengers.</li>
                    <li>Developed secure backend services featuring wallet management, Razorpay payment integration, PostgreSQL, and Supabase, ensuring reliable transactions and scalable data management.</li>
                    <li><strong>Tech Stack:</strong> React, Node.js, Express, Socket.IO, Supabase, PostgreSQL, JWT, Leaflet, Razorpay</li>
                </ul>
                <div className="project-links mt-4">
                    <a href="https://github.com/VrajPrajapati6/EcoDrive" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <Code2 size={18} /> GitHub
                    </a>
                </div>
            </div>

            <div className="project-card glass-card">
                <div className="project-header">
                    <h3>MarketMapper - AI-Powered Business Intelligence Platform</h3>
                </div>
                <ul className="project-details">
                    <li>Built an AI-assisted market intelligence platform that evaluates demographics, competitor density, and regional business insights to identify high-potential locations for new businesses.</li>
                    <li>Developed an intelligent recommendation engine that combines business analytics with AI-generated insights, enabling users to make informed, data-driven location decisions.</li>
                    <li>Designed a responsive full-stack application with interactive visualizations, scalable backend APIs, and modern web architecture to deliver an intuitive decision-support experience.</li>
                    <li><strong>Tech Stack:</strong> Next.js, Node.js, Express.js, MongoDB, AI</li>
                </ul>
                <div className="project-links mt-4">
                    <a href="https://github.com/VrajPrajapati6/MarketMapper-Techsprint" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem', borderRadius: '20px' }}>
                        <Code2 size={18} /> GitHub
                    </a>
                </div>
            </div>
            </div>

        </section>
    );
};

export default Projects;

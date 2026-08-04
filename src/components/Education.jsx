const Education = () => {
    return (
        <section id="education" className="section fade-in">
            <h2 className="section-title">Education</h2>
            
            <div className="timeline-container mt-4">
                <div className="timeline-line"></div>
                
                <div className="timeline-item-wrapper left">
                    <div className="timeline-dot"></div>
                    <div className="timeline-item glass-card">
                        <div className="timeline-date">2024 - 2028</div>
                        <h3>Computer Science and Engineering</h3>
                        <h4>Nirma University | CGPA: 8.96</h4>
                    </div>
                </div>
                
                <div className="timeline-item-wrapper right">
                    <div className="timeline-dot"></div>
                    <div className="timeline-item glass-card">
                        <div className="timeline-date">2024</div>
                        <h3>XII (GHSEB)</h3>
                        <h4>Gayatri Vidhyalaya | 90.9%</h4>
                    </div>
                </div>
                
                <div className="timeline-item-wrapper left">
                    <div className="timeline-dot"></div>
                    <div className="timeline-item glass-card">
                        <div className="timeline-date">2022</div>
                        <h3>X (GHSEB)</h3>
                        <h4>Noble Higher Secondary School | 96.33%</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

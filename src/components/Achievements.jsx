const Achievements = () => {
    return (
        <section id="achievements" className="section fade-in">
            <h2 className="section-title">Hackathons & Highlights</h2>
            <div className="achievements-grid mt-4">
                <div className="achievement glass-card">
                    <h4>Reliance Foundation Scholar</h4>
                </div>
                <div className="achievement glass-card">
                    <h4>Finalist</h4>
                    <p>ODOO Hackathon (2026)</p>
                </div>
                <div className="achievement glass-card">
                    <h4>Finalist</h4>
                    <p>ODOO - KSV Hackathon (July 2026)</p>
                </div>
                <div className="achievement glass-card">
                    <h4>6th Rank</h4>
                    <p>GDG Hackathon, Nirma University (Jan 2026)</p>
                </div>
                <div className="achievement glass-card full-width">
                    <h4>Problem Solving</h4>
                    <p>Solved 290+ LeetCode problems, completed NeetCode 150</p>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

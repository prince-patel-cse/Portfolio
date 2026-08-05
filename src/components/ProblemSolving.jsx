const ProblemSolving = () => {
    return (
        <section id="problem-solving" className="section fade-in">
            <h2 className="section-title">Problem Solving & DSA</h2>
            <p className="summary" style={{ marginBottom: '2rem' }}>
                I regularly practice data structures and algorithms to sharpen my logic and write more efficient code.
            </p>
            <div className="achievements-grid mt-4">
                <div className="achievement glass-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                    <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>290+</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '1.5rem' }}>LeetCode Problems</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', padding: '0 0.5rem' }}>
                        <div style={{ color: '#22c55e' }}><strong>Easy</strong><br/>74/958</div>
                        <div style={{ color: '#eab308' }}><strong>Med.</strong><br/>180/2095</div>
                        <div style={{ color: '#ef4444' }}><strong>Hard</strong><br/>40/960</div>
                    </div>
                </div>
                <div className="achievement glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>150/150</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}>NeetCode Roadmap</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Mastered core algorithmic patterns</p>
                </div>
                <div className="achievement glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>1,530</h4>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '600' }}>Peak  Ranking</p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolving;

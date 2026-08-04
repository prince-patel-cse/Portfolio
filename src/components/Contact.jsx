import { Mail, Code2, Link2, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = () => {
        // We don't preventDefault so the mailto link still tries to open the mail client.
        // However, we also copy the email to the clipboard as a fallback for users without a default mail app.
        navigator.clipboard.writeText('prince.patel.cse@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <section id="contact" className="section fade-in text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="summary" style={{ margin: '0 auto 2rem' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-links mt-4">
                <a 
                    href="mailto:prince.patel.cse@gmail.com?subject=Hello%20Prince!&body=Hi%20Prince,%0A%0A" 
                    className="btn btn-primary" 
                    style={{ marginBottom: '2.5rem', minWidth: '160px', justifyContent: 'center' }}
                    onClick={handleEmailClick}
                >
                    {copied ? <Check size={18} /> : <Mail size={18} />}
                    {copied ? 'Email Copied!' : 'Say Hello'}
                </a>
                <div className="social-links mt-4">
                    <a href="https://www.linkedin.com/in/prince-patel-cse/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <Link2 size={18} /> LinkedIn
                    </a>
                    <a href="https://github.com/prince-patel-cse" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <ExternalLink size={18} /> GitHub
                    </a>
                    <a href="https://leetcode.com/u/D6DnrdP8jS/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <Code2 size={18} /> LeetCode
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

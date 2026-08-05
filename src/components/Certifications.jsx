import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X } from "lucide-react";

const certificationsData = [
  { id: 1, title: "DSA", category: "Technical", image: "/AC_Sigma.jpg" },
  {
    id: 2,
    title: "ODOO ✕ KSV Hackathon",
    category: "Hackathons",
    image: "/ODOO.jpeg",
  },
  {
    id: 3,
    title: "Academic Excellence",
    category: "Academic",
    image: "/Acad1.jpeg",
  },
  {
    id: 4,
    title: "Academic Excellence",
    category: "Academic",
    image: "/Acad2.jpeg",
  },
  {
    id: 5,
    title: "Academic Scholar",
    category: "Academic",
    image: "/Acad3.jpeg",
  },
];

const Certifications = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const categories = ["All", "Academic", "Technical", "Hackathons"];

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300); // Wait for animation to finish
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const filteredCerts =
    filter === "All"
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === filter);

  return (
    <section id="certifications" className="section fade-in">
      <h2 className="section-title">Certifications</h2>

      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cert-grid">
        {filteredCerts.map((cert) => (
          <div key={cert.id} className="cert-card glass-card">
            <div className="cert-image-wrapper">
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <div
                className="expand-icon"
                onClick={() => setSelectedImage(cert.image)}
              >
                <Maximize2 size={20} />
              </div>
            </div>
            <h4 className="cert-title">{cert.title}</h4>
            <span className="cert-category">{cert.category}</span>
          </div>
        ))}
      </div>

      {selectedImage &&
        createPortal(
          <div
            className={`image-modal ${isClosing ? "closing" : ""}`}
            onClick={closeModal}
          >
            <button
              className="close-modal"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X size={28} />
            </button>
            <div className={`modal-content ${isClosing ? "closing" : ""}`}>
              <img
                src={selectedImage}
                alt="Expanded View"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default Certifications;

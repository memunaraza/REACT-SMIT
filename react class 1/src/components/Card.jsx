import './Card.css';

const Card = () => {
  return (
    <div className="card">
      {/* Product / Feature Image */}
      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60" 
        alt="Code Editor" 
        className="card-image"
      />

      {/* Main Content */}
      <div className="card-content">
        <span className="card-tag">Development</span>
        <h3 className="card-title">React Web App</h3>
        <p className="card-description">
          Modern UI components crafted with clean structure and custom CSS layout.
        </p>

        {/* Footer */}
        <div className="card-footer">
          <span className="card-price">$49</span>
          <button type="button" className="card-btn">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
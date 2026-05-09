import "./Hero.css";

function Hero({ onInfo, onServiceInfo }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="emergency-label">24/7 Emergency Service Available</p>
          <p className="small-heading">
            Diesel & Gas Repairs • Mobile Service • Towing
          </p>

          <h1>
            Expert Diesel & Gas Repairs
            <span> Delivered To You</span>
          </h1>

          <p className="hero-description">
            Whether you're stranded on the road or need reliable mobile service,
            Erick's Garage delivers professional repairs, towing, and roadside
            assistance when you need it most.
          </p>

          <div className="hero-buttons">
            <a href={onInfo.phoneLink} className="primary-button">
              📞 {onInfo.phone}
            </a>
            <a href="#services" className="secondary-button">
              View Services
            </a>
          </div>

          <div className="trust-list">
            <span>✅ Licensed & Insured</span>
            <span>✅ 15+ Years Experience</span>
            <span>✅ Free Estimates</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <p>Fast Help</p>
            <h2>Mobile Service & Towing</h2>
          </div>

          {onServiceInfo.slice(0, 3).map((service) => (
            <div className="mini-service-card" key={service.title}>
              <span className="mini-icon">{service.icon}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

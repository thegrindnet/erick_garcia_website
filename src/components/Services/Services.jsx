import "./Services.css";

function Services({ onServiceInfo }) {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">What We Offer</p>
          <h2>Simple, reliable automotive help when you need it.</h2>
          <p>
            This one-page layout keeps the customer focused on the most
            important action: calling for service.
          </p>
        </div>

        <div className="services-grid">
          {onServiceInfo.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

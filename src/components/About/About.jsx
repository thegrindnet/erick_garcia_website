import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div>
          <p className="section-label yellow-label">About Erick's Garage</p>
          <h2>Local service built around speed, trust, and convenience.</h2>
          <p>
            Erick's Garage helps drivers with diesel and gas repairs, mobile
            service, towing, and roadside assistance. The goal is simple: get
            customers back on the road with honest, professional help.
          </p>
        </div>

        <div className="about-card">
          <p className="about-card-label">Why customers call</p>
          <ul>
            <li>✅ Mobile help when the vehicle cannot come to the shop</li>
            <li>✅ Diesel and gas vehicle experience</li>
            <li>✅ Emergency roadside support</li>
            <li>✅ Clear communication and free estimates</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

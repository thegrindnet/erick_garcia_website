import "./Contact.css";

function Contact({ onInfo }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        <div className="phone-icon">📞</div>
        <h2>Need Immediate Help?</h2>
        <p>
          Call now for fast, reliable emergency service. Available 24 hours a
          day, 7 days a week.
        </p>
        <a href={onInfo.phoneLink} className="contact-phone">
          {onInfo.phone}
        </a>
        <p className="location">{onInfo.location}</p>
      </div>
    </section>
  );
}

export default Contact;

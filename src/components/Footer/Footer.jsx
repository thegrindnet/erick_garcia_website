import "./Footer.css";

function Footer({ onInfo }) {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>{onInfo.name}</h3>
          <p>{onInfo.location}</p>
        </div>

        {/* <a href={overflow: none;onInfo.phoneLink}>{onInfo.phone}</a> */}
        <a href={"#"}>{onInfo.phone}</a>
      </div>
    </footer>
  );
}

export default Footer;

import Offcanvas from "react-bootstrap/Offcanvas";
import "../styleSheets/contactUs.css";

function ContactUs({ showContact, setContact }) {
  return (
    <Offcanvas
      show={showContact}
      onHide={() => {
        setContact(false);
      }}
      scroll={true}
    >
      <div className="offCanvas-bg">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            If you have any questions regarding AstroDynamx, please type it in
            below, this message will be sent to example@gmail.com and we will
            get back to you.
            <form className="offCanvas-form">
              <label className="form-label">Name </label>
              <br />
              <input className="small-input" type="text" name="name" /> <br />
              <label className="form-label">Email </label>
              <br />
              <input className="small-input" type="text" name="email" /> <br />
              <label className="form-label">Message </label>
              <br />
              <textarea className="large-input" type="text" name="message" />
              <br />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
}

export default ContactUs;

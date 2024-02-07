import Offcanvas from "react-bootstrap/Offcanvas";
import "../LandingPageStyles/contactUs.css";
import { useState } from "react";

function ContactUs({ showContact, setContact }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
      sendto: "adiknathan09@gmail.com",
    };

    //cursor to loading
    setIsLoading(true);

    fetch("https://astrodynamx-backendservice.onrender.com/nodemailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => {
        alert("Successfully sent message!");
        setIsLoading(false);
        e.target.reset();
      })
      .catch((response) => {
        alert(response);
        setIsLoading(false);
      });
  };

  return (
    <Offcanvas
      show={showContact}
      onHide={() => {
        setContact(false);
      }}
      scroll={true}
      backdrop={true}
    >
      <Offcanvas.Header
        closeButton
        closeVariant="white"
        className="offCanvas-bg"
      >
        <Offcanvas.Title>Contact Us</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="offCanvas-bg">
        If you have any questions regarding AstroDynamx, please type it in
        below, this message will be sent to astrodynamx@gmail.com and we will
        get back to you.
        <form className="offCanvas-form" onSubmit={handleSubmit}>
          <label id="name" className="form-label">
            Name
          </label>
          <br />
          <input className="small-input" type="text" id="name" required />{" "}
          <br />
          <label className="form-label">Email </label>
          <br />
          <input
            className="small-input"
            type="email"
            id="email"
            required
          />{" "}
          <br />
          <label className="form-label">Message </label>
          <br />
          <textarea className="large-input" type="text" id="message" required />
          <br />
          <button
            className="submit-button"
            type="submit"
            style={{ cursor: isLoading ? "wait" : "pointer" }}
          >
            Submit
          </button>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default ContactUs;

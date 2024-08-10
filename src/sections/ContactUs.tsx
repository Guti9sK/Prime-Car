import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactUs = () => {
  // Permitir solamente el signo "+" y carácteres numéricos
  document.getElementById("phone")?.addEventListener("input", (e) => {
    const inputElement = e.target as HTMLInputElement;
    const x = inputElement.value.replace(/\D/g, "").substring(0, 10);
    inputElement.value = x.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  });

  const [phone, setPhone] = useState("");

  return (
    <section className="contact-us">
      <div className="contact-us_text">
        <h2>CONTACT US</h2>
        <p>
          To find out more information about cars and quotes,
          <br /> fill out the form on the side or contact us by phone.
        </p>
      </div>
      <div className="contact-us_form">
        <form action="#" className="form-box">
          <div className="input-box w50 w25">
            <input type="text" name="first-name" id="first-name" required />
            <label htmlFor="first-name">First Name</label>
          </div>
          <div className="input-box w50 w25">
            <input type="text" name="last-name" id="last-name" required />
            <label htmlFor="last-name">Last Name</label>
          </div>
          <div className="input-box w50">
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box w50">
            <PhoneInput
              defaultCountry="usa"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Phone Number"
            />
          </div>
          <div className="input-box w100">
            <textarea name="message" id="message" required></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

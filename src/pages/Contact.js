import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
const ContactForm = props => {
  const iconGithub = <FontAwesomeIcon icon={faGithubSquare} />;
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const iconTwitter = <FontAwesomeIcon icon={faTwitterSquare} />;

  const [formState, setFormState] = useState({ email: "" });
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    setFormState({
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      review: "",
    });
  };
  return (
    <>
      <section class="contact-section" id="contact">
        <h2 class="section-title">
          <span class="bright-color-text">C</span>ontact me
        </h2>
        <p>
          Email me:{" "}
          <a class="email" href="mailto: grillo.garnacho@gmail.com">
            grillo.garnacho@gmail.com
          </a>
        </p>

        <div class="social-media">
          <ul class="social-list">
            <li class="social-item">
              <a
                class="social-link"
                href="https://github.com/GrilloGG"
                target="_blank"
              >
                <i>{iconGithub}</i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                href="https://www.linkedin.com/in/carlos-garnacho-gutierrez-06a92284/"
                target="_blank"
              >
                <i>{iconLinkedin}</i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                href="https://twitter.com/"
                target="_blank"
              >
                <i>{iconTwitter}</i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <h2 class="section-title projects-title">
        <span class="bright-color-text">C</span>ontact form
      </h2>
      <form className="form-contact" onSubmit={handleFormSubmit}>
        <input
          className="input-contact"
          placeholder="First Name"
          name="first-name"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          className="input-contact"
          placeholder="Last Name"
          name="last-name"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        <input
          className="input-contact"
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className="input-contact"
          placeholder="Phone Number"
          name="phone-number"
          type="number"
          value={formState.phoneNumber}
          onChange={handleChange}
        />

        <textarea
          className="textarea-contact"
          name="text-area"
          placeholder="Write your review here"
          maxLength="500"
          value={formState.review}
          onChange={handleChange}
        ></textarea>
        <div className="btns-contact">
          <button className="button-contact" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

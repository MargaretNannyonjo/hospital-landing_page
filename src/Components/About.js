import React from "react";
import doc from "../images/doc-female.webp";
import MaleDoc from "../images/doc-male.jpeg";
import femDoc from "../images/nurse.jpg";
import doctor from "../images/female-nurse.avif";
import femNurse from "../images/female.avif";
import nurses from "../images/male-nurse.jpeg";
import Nurse from "../images/male.jpeg";
import theNurse from "../images/the nurse.jpeg";

export const About = () => {
  return (
    <>
      <div className="about">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Unity Hospital, where our commitment to exceptional
          healthcare is guided by principles of compassion, innovation, and
          personalized care. Our journey began with a sincere dedication to the
          well-being of our community, evolving over the years into a trusted
          healthcare provider recognized for excellence.
        </p>

        <p>
          At Unity Hospital, our mission is to deliver high-quality,
          patient-centered care across a comprehensive range of medical
          services. We believe in creating a healing environment, where our
          experienced medical professionals work tirelessly to ensure your
          health and comfort. Equipped with state-of-the-art facilities and
          cutting-edge technology, we strive to remain at the forefront of
          medical advancements.
        </p>

        <p>
          As a community-focused hospital, we aspire to be more than just a
          healthcare facility. We are your partners in health, committed to
          understanding your unique needs and providing the best possible care.
          Our team is here to listen, empathize, and support you on your journey
          to wellness.
        </p>

        <p>
          Thank you for choosing Unity Hospital. We eagerly anticipate the
          opportunity to be your trusted healthcare provider, contributing to
          the health and well-being of our community.
        </p>

        <h3>Meet Our Team</h3>

        <div className="container">
          <div className="container-card">
            <img src={doc} alt="" />
          </div>

          <div className="container-card">
            <img src={doctor} alt="" />
          </div>

          <div className="container-card">
            <img src={femDoc} alt="" />
          </div>

          <div className="container-card">
            <img src={MaleDoc} alt="" />
          </div>

          <div className="container-card">
            <img src={nurses} alt="" />
          </div>

          <div className="container-card">
            <img src={Nurse} alt="" />
          </div>

          <div className="container-card">
            <img src={femNurse} alt="" />
          </div>

          <div className="container-card">
            <img src={theNurse} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

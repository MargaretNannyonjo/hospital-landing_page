import React from "react";
import primary from "../images/primary.jpeg";
import specialised from "../images/specialised.jpg";
import emergency from "../images/emergency.webp";
import diagnosis from "../images/diagnostic.jpeg";
import surgical from "../images/surgical.avif";
import maternity from "../images/maternity.jpg";
import rehabilitation from "../images/rehabilitation.png";
import mental from "../images/mental1.jpeg";
import { Bottom } from "../Components/Bottom";

export const Services = () => {
  return (
    <>
      <div className="services">
        <h1>OUR SERVICES</h1>
        <p>
          At Unity Hospital, we are proud to offer a comprehensive array of
          medical services, designed to address the diverse healthcare needs of
          our community. Our dedicated team of healthcare professionals is
          committed to providing high-quality and compassionate care. Explore
          our services below:
        </p>

        <div className="services-page">
          <div className="service-page-content">
            <img src={primary} alt="" />
          </div>

          <div className="service-page-content">
            <h3>primary Health Care:</h3>
            <p>
              Our primary care services focus on preventive healthcare, routine
              check-ups, and the management of common illnesses. Our experienced
              family medicine and internal medicine practitioners are here to be
              your first point of contact for all your health concerns.
            </p>
          </div>

          <div className="service-page-content">
            <h3>Specialized Care:</h3>
            <p>
              Unity Hospital provides specialized medical services across
              various disciplines, including cardiology, orthopedics, neurology,
              and more. Our team of specialists is equipped to diagnose and
              treat complex medical conditions with the latest advancements in
              medical technology.
            </p>
          </div>

          <div className="service-page-content">
            <img src={specialised} alt="" />
          </div>

          <div className="service-page-content">
            <img src={emergency} alt="" />
          </div>

          <div className="service-page-content">
            <h3>Emergency Care:</h3>
            <p>
              In times of medical emergencies, Unity Hospital's Emergency
              Department is prepared to provide immediate and expert care. Our
              emergency services are available 24/7, ensuring that you receive
              prompt attention when you need it most.
            </p>
          </div>

          <div className="service-page-content">
            <h3>Diagnostic Services:</h3>
            <p>
              Our diagnostic services include advanced imaging, laboratory
              tests, and other diagnostic procedures to aid in accurate and
              timely diagnosis. We use state-of-the-art technology to ensure
              precise results.
            </p>
          </div>

          <div className="service-page-content">
            <img src={diagnosis} alt="" />
          </div>

          <div className="service-page-content">
            <img src={surgical} alt="" />
          </div>

          <div className="service-page-content">
            <h3>Surgical Services:</h3>
            <p>
              Unity Hospital offers a range of surgical procedures performed by
              skilled surgeons. From routine surgeries to complex interventions,
              our surgical team is dedicated to ensuring your safety and
              successful outcomes.
            </p>
          </div>

          <div className="service-page-content">
            <h3>Maternity and Women's Health:</h3>
            <p>
              Our maternity and women's health services are designed to support
              expectant mothers and address women's health needs at every stage.
              Our obstetricians and gynecologists provide comprehensive care
              with a focus on wellness.
            </p>
          </div>
          <div className="service-page-content">
            <img src={maternity} alt="" />
          </div>

          <div className="service-page-content">
            <img src={rehabilitation} alt="" />
          </div>

          <div className="service-page-content">
            <h3>Rehabilitation Services:</h3>
            <p>
              Following illness, injury, or surgery, our rehabilitation services
              aim to restore and enhance your physical abilities. Our
              rehabilitation team includes physical therapists, occupational
              therapists, and other specialists.
            </p>
          </div>

          <div className="service-page-content">
            <h3>Mental Health Services:</h3>
            <p>
              Unity Hospital recognizes the importance of mental health. Our
              mental health services include counseling, therapy, and
              psychiatric care to support individuals facing mental health
              challenges.
            </p>
          </div>
          <div className="service-page-content">
            <img src={mental} alt="" />
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

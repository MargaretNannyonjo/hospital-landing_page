import React from "react";
import { About } from "../Components/About";
import { Bottom } from "../Components/Bottom";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-section1">
          <h1>
            Your Health Is <br /> <span> Our Priority</span>
          </h1>

          <p>
            Welcome to Unity Hospital, We prioritize personalized,
            <br />
            patient-centered care, offering state-of-the-art facilities and
            <br /> a commitment to innovation.
          </p>

          <p>
            From primary care to specialized treatments, our goal is to <br />
            be your trusted partner in health, <br />
            supporting your journey to recovery and a healthier, happier life.
          </p>
          <button>Book An Appointment</button>

          <div className="socials">
            <i class="fa-brands fa-facebook" id="media"></i>
            <i class="fa-brands fa-twitter" id="media"></i>
            <i class="fa-brands fa-square-instagram" id="media"></i>
            <i class="fa-brands fa-youtube" id="media"></i>
          </div>
        </div>

        <div className="home-inner">
          <div className="home-card">
            <i class="fa-solid fa-syringe" id="icon"></i>
            <h3>Open 24/7</h3>
            <p>
              Our doors are always open, and our experienced medical team is
              ready to provide round-the-clock care.
            </p>
          </div>

          <div className="home-card">
            <i class="fa-solid fa-stethoscope" id="icon"></i>
            <h3>Quality Services</h3>
            <p>
              Your are our priority, and we strive to deliver the highest
              quality care with compassion and expertise.
            </p>
          </div>

          <div className="home-card">
            <i class="fa-solid fa-suitcase-medical" id="icon"></i>
            <h3>First Aid</h3>
            <p>
              Our skilled medical team is equipped to handle a wide range of
              medical emergencies.
            </p>
          </div>
        </div>
      </div>
      <About />
      <Bottom />
    </>
  );
};

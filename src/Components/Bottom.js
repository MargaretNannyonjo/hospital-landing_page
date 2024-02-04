import React from "react";

export const Bottom = () => {
  return (
    <>
      <div className="bottom">
        <div className="heading">
          <div>
            <h2>Stay Informed</h2>
            <h3>Sign up for our news letter</h3>
          </div>

          <div id="head">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="bottom-container">
          <div className="footer">
            <p>www.unityhospital.com</p>
            <p>unityhospital@gmail.com</p>
            <p>000-000-000</p>
            <div className="socials">
              <i class="fa-brands fa-facebook" id="media"></i>
              <i class="fa-brands fa-twitter" id="media"></i>
              <i class="fa-brands fa-square-instagram" id="media"></i>
              <i class="fa-brands fa-youtube" id="media"></i>
            </div>
          </div>

          <div className="footer">
            <h4>Stories</h4>
            <p>Find out what makes us the best Health care providers</p>

            <h4>Events</h4>
            <p>Stat tuned for upcoming events</p>

            <h4>Donations</h4>
            <p>Where can you make a difference?</p>
          </div>

          <div className="footer">
            <h4>About</h4>
            <p>Frequently Asked Questions</p>
            <p>Services</p>
            <p>General Hospital</p>
          </div>

          <div className="footer">
            <h4>Privacy and security</h4>
            <p>Pledge to Donors</p>
            <p>Privacy policy</p>
            <p>Social Media Policy</p>
            <p>Copyright Notice</p>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import social from "../assets/images/social-media.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-info-container">
          <div className="career-text">
            <h3>CareerCompass</h3>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={social} alt="" />
          </div>
          <div className="career-text">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Careers</p>
          </div>
          <div className="career-text">
            <h4>Product</h4>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
          <div className="career-text">
            <h4>Support</h4>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
          <div className="career-text">
            <h4>Contact</h4>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className="footer-copyright">
          <span>@2023 CareerCompass. All Rights Reserved</span>
          <span>Powered by CareerCompass</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

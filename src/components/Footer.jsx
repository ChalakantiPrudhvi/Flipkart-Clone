import React from "react";
import "../css/Footer.css";
import log1 from "../images/seller.svg";
import log2 from "../images/advertise.svg";
import log3 from "../images/gifts.svg";
import log4 from "../images/help.svg";
import log5 from "../images/pays.svg";
const Footer = () => {
  return (
    <>
      <div className="end">
        <div className="about">
          <p style={{ color: "grey" }}>ABOUT</p>
          <br />
          <ul>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Flipkart Stories</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
            <li>
              <a href="/">Corporate Information</a>
            </li>
          </ul>
        </div>

        <div className="gc">
          <p style={{ color: "grey" }}>GROUP COMPANIES</p>
          <br />
          <ul>
            <li>
              <a href="/">Myntra</a>
            </li>
            <li>
              <a href="/">Cleartrip</a>
            </li>
            <li>
              <a href="/">Shopsy</a>
            </li>
          </ul>
        </div>

        <div className="help">
          <p style={{ color: "grey" }}>HELP</p>
          <br />
          <ul>
            <li>
              <a href="/">Payments</a>
            </li>
            <li>
              <a href="/">Shipping</a>
            </li>
            <li>
              <a href="/">Cancellation & Returns</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="cp">
          <p style={{ color: "grey" }}>CONSUMER POLICY</p>
          <br />
          <ul>
            <li>
              <a href="/">Cancellation & Returns</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">Security</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Grievance Redressal</a>
            </li>
            <li>
              <a href="/">EPR Compliance</a>
            </li>
          </ul>
        </div>

        <hr style={{ color: "grey", height: "200px", marginTop: "40px" }} />

        <div className="mail">
          <p style={{ color: "#878787" }}>Mail Us:</p>
          <br />
          <p>Flipkart Internet Private Limited,</p>
          <p>Building Alyssa, Begonia,</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103</p>
          <p>Karnataka, India</p>

          <div className="social">
            <p style={{ color: "grey" }}>Social</p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div className="roa">
          <p style={{ color: "#878787" }}>Registered Office Address:</p>
          <br />
          <p>Flipkart Internet Private Limited,</p>
          <p>Building Alyssa, Begonia,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103</p>
          <p>Karnataka, India</p>
          <p>CIN: U52599KA2012PTC066107</p>
          <p>Telephone: 044-45614700</p>
        </div>
      </div>

      <hr style={{ color: "white", margin: "0" }} />

      <div className="last">
        <div className="s11">
          <img src={log1} alt="seller" />
          <a href="/" style={{ marginLeft: "9px" }}>
            Become a Seller
          </a>
        </div>

        <div className="s11">
          <img src={log2} alt="advertise" />
          <a href="/" style={{ marginLeft: "9px" }}>
            Advertise
          </a>
        </div>

        <div className="s11">
          <img src={log3} alt="gift-cards" />
          <a href="/" style={{ marginLeft: "9px" }}>
            Gift Cards
          </a>
        </div>

        <div className="s11">
          <img src={log4} alt="help-center" />
          <a href="/" style={{ marginLeft: "9px" }}>
            Help Center
          </a>
        </div>

        <div className="s11">
          <p>© 2007–2025 Flipkart.com</p>
        </div>

        <div className="s11">
          <img src={log5} alt="payment methods" />
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "../css/SectionB.css";
import img1 from "../images/Af1.jpg";
import img2 from "../images/Af2.jpg";
import img3 from "../images/Af3.jpg";
import img4 from "../images/Af4.jpg";
import img5 from "../images/Ae1.jpg";
import img6 from "../images/Ae2.jpg";
import img7 from "../images/Ae3.jpg";
import img8 from "../images/Ae4.jpg";
import img9 from "../images/Ag1.jpg";
import img10 from "../images/Ag2.jpg";
import img11 from "../images/Ag3.jpg";
import img12 from "../images/Ag4.jpg";
function SectionB() {
  return (
    <div>
      <div className="secA">
        <div className="A">
          <div className="H">
            <div className="H1">
              <h2>Fashion's Top Deals</h2>
            </div>
            <div className="B1">
              <button>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div className="T">
            <div>
              <img src={img5} alt="" />
              <br />
              <h5>Men's Slippers</h5>
              <h4>Min. 70% Off</h4>
            </div>
            <div>
              <img src={img6} alt="" />
              <br />
              <h5>Men's T-shirts</h5>
              <h4>In focus Now</h4>
            </div>
            <div>
              <img src={img7} alt="" />
              <br />
              <h5>Men's casual shoes</h5>
              <h4>Min. 70% Off</h4>
            </div>
            <div>
              <img src={img8} alt="" />
              <br />
              <h5>Wrist Watches</h5>
              <h4>Min. 90% Off</h4>
            </div>
          </div>
        </div>
        <div className="A">
          <div className="H">
            <div className="H1">
              <h2>Make your home stylish</h2>
            </div>
            <div className="B1">
              <button>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div className="T">
            <div>
              <img src={img1} alt="" />
              <br />
              <h5>Shoe rack</h5>
              <h4>Min. 50% Off</h4>
            </div>
            <div>
              <img src={img2} alt="" />
              <br />
              <h5>Hammock Swings</h5>
              <h4>Min. 50% Off</h4>
            </div>
            <div>
              <img src={img3} alt="" />
              <br />
              <h5>Beds</h5>
              <h4>Min. 50% Off</h4>
            </div>
            <div>
              <img src={img4} alt="" />
              <br />
              <h5>collapsible Wardrobes</h5>
              <h4>Min. 50% Off</h4>
            </div>
          </div>
        </div>
        <div className="A">
          <div className="H">
            <div className="H1">
              <h2>Home Decors & Furnishings</h2>
            </div>
            <div className="B1">
              <button>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <div className="T">
            <div>
              <img src={img9} alt="" />
              <br />
              <h5>Choppers</h5>
              <h4>Min. 50% Off</h4>
            </div>
            <div>
              <img src={img10} alt="" />
              <br />
              <h5>Wall Clocks</h5>
              <h4>Min. 50% Off</h4>
            </div>
            <div>
              <img src={img11} alt="" />
              <br />
              <h5>Torches</h5>
              <h4>Min. 50% Off</h4>
            </div>
            <div>
              <img src={img12} alt="" />
              <br />
              <h5>Bath Towels</h5>
              <h4>Widest Range</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionB;

import React, { useState } from "react";
import "../css/Section.css";
import o1 from "../images/o1.jpg";
import o2 from "../images/o2.jpg";
import o3 from "../images/o3.jpg";
import o4 from "../images/o4.jpg";
import o5 from "../images/o5.jpg";
import o6 from "../images/o6.jpg";
import o7 from "../images/o7.jpg";
import o8 from "../images/o8.jpg";
import B1 from "../images/B1.jpg";

function Section() {
  const visibleCount = 6;
  const cardWidth = 244;
  const cardMarginRight = 8;
  const itemWidth = cardWidth + cardMarginRight;
  const totalItems = 8;

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < totalItems - visibleCount) {
      setIndex(index + 2);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 2);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="d-flex align-items-center">
          <button
            className="carousel-control-prev-icon"
            id="btn1"
            onClick={prev}
            disabled={index === 0}
          ></button>

          <div
            className="overflow-hidden"
            style={{
              width: `${visibleCount * itemWidth}px`,
              backgroundColor: "#fff",
            }}
          >
            <div
              className="d-flex"
              style={{
                transform: `translateX(-${index * itemWidth}px)`,
                transition: "0.4s ease",
                width: `${totalItems * itemWidth}px`,
              }}
            >
              <div className="card-box me-2">
                <img src={o8} alt="Clock" />
                <h5>Monitors</h5>
                <h5> From ₹26,000</h5>
              </div>
              <div className="card-box me-2">
                <img src={o1} alt="" />
                <h5>Clock</h5>
                <h5>From ₹2,000</h5>
              </div>
              <div className="card-box me-2">
                <img src={o2} alt="Clock" />
                <h5>Projector</h5>
                <h5> From ₹5,000</h5>
              </div>
              <div className="card-box me-2">
                <img src={o3} alt="Clock" />
                <h5>watch</h5>
                <h5>From ₹1,500</h5>
              </div>
              <div className="card-box me-2">
                <img src={o4} alt="Clock" />
                <h5>TV's & Appliance</h5>
                <h5>From ₹18,000</h5>
              </div>
              <div className="card-box me-2">
                <img src={o5} alt="Clock" />
                <h5>Top Mirror Cameras</h5>
                <h5>Shop Now!</h5>
              </div>
              <div className="card-box me-2">
                <img src={o6} alt="Clock" />
                <h5>Camera</h5>
                <h5>From ₹2,500</h5>
              </div>
              <div className="card-box me-2">
                <img src={o7} alt="Clock" />
                <h5>SmartWatches</h5>
                <h5>From ₹3,000</h5>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-next-icon"
            id="btn2"
            onClick={next}
            disabled={index >= totalItems - visibleCount}
          ></button>
        </div>
      </div>
      <div className="flight">
        <img src={B1} alt="" />
      </div>
    </div>
  );
}

export default Section;

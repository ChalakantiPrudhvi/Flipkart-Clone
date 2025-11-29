import React from "react";
import "../css/Main.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div>
      <div className="opts">
        <div className="opts-div">
          <div className="opt1">
            <button>
              <img src={img1} alt="minutes" />
            </button>
            <h5>Minutes</h5>
          </div>
          <div className="opt2">
            <button>
              <img src={img3} alt="fashion" />
            </button>
            <h5>Fashion</h5>
          </div>
          <div className="opt3">
            <button>
            <Link to="/Mobile">
              <img src={img2} alt="mobiles" />
            </Link>
            </button>
            <h5>Mobiles&Tablets</h5>
          </div>
          <div className="opt4">
            <button>
              <img src={img4} alt="electronics" />
            </button>
            <h5>Electronics</h5>
          </div>
          <div className="opt5">
            <button>
              <img src={img5} alt="home" />
            </button>
            <h5>Home & Furniture</h5>
          </div>
          <div className="opt6">
            <button>
              <img src={img6} alt="tv" />
            </button>
            <h5>TV's & Appliances</h5>
          </div>
          <div className="opt7">
            <button>
              <img src={img7} alt="flight-booking" />
            </button>
            <h5>Flight Bookings</h5>
          </div>
          <div className="opt8">
            <button>
              <img src={img8} alt="beauty" />
            </button>
            <h5>Beauty & Food..</h5>
          </div>
          <div className="opt9">
            <button>
              <img src={img9} alt="grocery" />
            </button>
            <h5>Grocery</h5>
          </div>
        </div>
      </div>

      <div className="slides">
        <div className="slides">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={s1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={s2} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={s3} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={s4} alt="four slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={s5} alt="five slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

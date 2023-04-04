import React from "react";
import BannerBackground from "../Assets/background-blue.png";
// import BannerImage from "../Assets/home-banner-image.png";
import BannerImage from "../Assets/image1tech.png";
import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome, to Company Bench Sharing Portal
          </h1>
          <p className="primary-text">
            Here,you will get the entire list of benched resources like Seating
            Space,Engineers,Product Licenses and many more.
          </p>
          {/* <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

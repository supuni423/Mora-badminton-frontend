import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import HeaderPage from "../../HeaderPage/HeaderPage";
import image from "../../../assests/images/tshirts/tshirt-front.png"

// Import your background images (replace with your actual image paths)
const backgroundImages = [
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  
  
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through background images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Animated Background Slides */}
      <div className={styles.backgroundSlider}>
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`${styles.backgroundSlide} ${
              index === currentImageIndex ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className={styles.headerDiv}>
        <HeaderPage />
        <div className={styles.UMiSFContainer}>
          <h1>UMiSF</h1>
          <p>
            University of Moratuwa<br/>
            International Shuttlers' Fest
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
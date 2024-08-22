import React from "react";

const AboutUs = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "20px",
      boxSizing: "border-box",
    },
    content: {
      maxWidth: "600px",
      textAlign: "center",
      fontSize: "1.5rem",
      // color: "#333",
      color: "#4682B4"
    },
    "@media(maxWidth: 768px)": {
      content: {
        fontSize: "1.2rem",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>About Us</h1>
        <p>
          We are committed to providing the best services to our customers. Our
          team of professionals works tirelessly to ensure satisfaction in every
          aspect of our business.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

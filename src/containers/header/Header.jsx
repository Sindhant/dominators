import React, { useEffect } from "react";
import lottie from "lottie-web";
import "./header.css";
import animationData from "./Animation - 1707491102020.json";

const Header = () => {
  useEffect(() => {
    const container = document.getElementById("lottie-container");
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg", // Choose the renderer (svg, canvas, html)
        loop: true,
        autoplay: true,
        animationData: animationData
         
      
        // Path to your animation json
      });
    }

    // Function to clear input fields
    const clearInputFields = () => {
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    };

    // Listen for beforeunload event to clear input fields
    window.addEventListener("beforeunload", clearInputFields);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("beforeunload", clearInputFields);
    };
  }, []);

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          SentinelLock- Your valuables our priority
        </h1>
        <p>
          A system that ensures unparalleled protection for your valued assets
          through cutting-edge technology and vigilant monitoring. We believe in
          delivering not just a service but a comprehensive solution that
          ensures your valuable belongings remain safe and secure. Thank you for
          entrusting us with your security needs, and we look forward to
          providing you with the highest level of protection
          through Sentinel Lock.
        </p>

        {/* Form section */}
        <div className="gpt3__header-content__input">
          <form action="https://formspree.io/f/xayregel" method="POST">
            <label htmlFor="email">Your email:</label>
            <input type="email" name="email" id="email" placeholder="Your Email Address" />

            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" placeholder="Write your message here"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Container for Lottie animation */}
      <div id="lottie-container" className="gpt3__header-image">
        
      </div>
    </div>
  );
};

export default Header;

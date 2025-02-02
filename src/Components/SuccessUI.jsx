import React from "react";
import Confetti from "react-confetti"; // Install with: npm install react-confetti

const SuccessUI = () => {
  return (
    <div className="success-ui">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h2>🎉 Integration Successful!</h2>
      <p>Your chatbot has been successfully integrated.</p>
      <div className="space-y-4">
        <button className="button">Explore Admin Panel</button>
        <button className="button button-success mt-2">
          Start Talking to Your Chatbot
        </button>
        <div className="flex justify-center space-x-4">
          <button className="button button-secondary mt-2">
            Share on Twitter
          </button>
          <button className="button button-secondary mt-2">
            Share on Facebook
          </button>
          <button className="button button-secondary mt-2">
            Share on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessUI;

import React from "react";

const FailureUI = () => {
  return (
    <div className="failure-ui">
      <h2>⚠️ Integration Not Detected</h2>
      <p>
        We couldn't detect the chatbot integration yet. Please try again or
        contact support.
      </p>
      <div className="space-y-4">
        <button className="button">Retry Integration Test</button>
        <button className="button button-danger mt-2">Contact Support</button>
      </div>
    </div>
  );
};

export default FailureUI;

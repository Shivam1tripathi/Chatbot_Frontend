import React, { useState } from "react";
import SuccessUI from "./SuccessUI";
import FailureUI from "./FailureUI";

const TestIntegration = () => {
  const [integrationStatus, setIntegrationStatus] = useState(null);

  const handleTestIntegration = () => {
    // Simulate integration check (replace with actual API call)
    const isSuccessful = Math.random() > 0.5; // 50% chance of success
    setIntegrationStatus(isSuccessful ? "success" : "failure");
  };

  return (
    <div>
      <button onClick={handleTestIntegration} className="button button-success">
        Test Integration
      </button>
      {integrationStatus === "success" && <SuccessUI />}

      {integrationStatus === "failure" && <FailureUI />}
    </div>
  );
};

export default TestIntegration;

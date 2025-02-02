import React from "react";

const TestChatbot = () => {
  const handleTestChatbot = () => {
    window.open("https://example.com", "_blank"); // Replace with the client's website URL
  };

  return (
    <div className="mb-4">
      <button onClick={handleTestChatbot} className="button">
        Test Chatbot
      </button>
      <div className="mt-2">
        <a href="/feedback" className="feedback-link">
          Chatbot not working as intended? Share feedback
        </a>
      </div>
    </div>
  );
};

export default TestChatbot;

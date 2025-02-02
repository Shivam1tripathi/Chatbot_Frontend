import React from "react";
import TestChatbot from "../Components/TestChatbot";
import IntegrateChatbot from "../Components/IntegrateChatbot";
import TestIntegration from "../Components/TestIntegration";

const ChatbotIntegration = () => {
  return (
    <div className="chatbot-integration">
      <div className="container">
        <h1>Chatbot Integration & Testing</h1>
        <TestChatbot />
        <IntegrateChatbot />

        <TestIntegration />
      </div>
    </div>
  );
};

export default ChatbotIntegration;

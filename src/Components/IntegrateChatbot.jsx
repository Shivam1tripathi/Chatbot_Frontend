import React from "react";

const IntegrateChatbot = () => {
  const dummyCode = `
    <script>
      // Dummy chatbot integration code
      #haifsnaskndknakdnaskkkkkkkkkkn
    </script>
  `;

  const handleMailInstructions = () => {
    const email = "developer@example.com"; // Replace with the client's developer email
    const subject = "Chatbot Integration Instructions";
    const body = `Hi,\n\nPlease find the chatbot integration instructions below:\n\n${dummyCode}\n\nBest regards,\nYour Team`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="mb-4">
      <h2>Integrate on Your Website</h2>
      <div className="mb-4">
        <p>
          Copy and paste the following code into the <code>&lt;head&gt;</code>{" "}
          of your website:
        </p>
        <pre className="code-block">
          <code>{dummyCode}</code>
        </pre>
      </div>
      <button
        onClick={handleMailInstructions}
        className="button button-secondary"
      >
        Mail Instructions to Developer
      </button>
    </div>
  );
};

export default IntegrateChatbot;

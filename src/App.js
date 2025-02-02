import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./Pages/Registration";
import SetupOrganisation from "./Pages/SetupOrganisation";
import ChatbotIntegration from "./Pages/ChatbotIntegration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/setuporganisation" element={<SetupOrganisation />} />
      <Route path="/chatbotintegration" element={<ChatbotIntegration />} />
    </Routes>
  );
}

export default App;

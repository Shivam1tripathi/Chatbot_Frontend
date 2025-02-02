import React, { useState } from "react";
import WebpageStatusTable from "../Components/WebpageStatusTable";
import CompanyForm from "../Components/CompanyForm";
import ViewChunksModal from "../Components/ViewChunksModal";
import { useNavigate } from "react-router-dom";

const SetupOrganisation = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // Dummy data for webpage scraping status
  const dummyData = [
    { id: 1, url: "https://example.com/page1", status: "Scraped" },
    { id: 2, url: "https://example.com/page2", status: "Pending" },
    { id: 3, url: "https://example.com/page3", status: "Detected" },
  ];

  // Dummy data for scraped chunks
  const dummyChunks = [
    "Chunk 1: Lorem ipsum dolor sit amet...",
    "Chunk 2: Consectetur adipiscing elit...",
    "Chunk 3: Sed do eiusmod tempor incididunt...",
  ];

  const handleSave = (data) => {
    console.log("Saved data:", data);
  };

  return (
    <div className="setup-organisation">
      <div className="container">
        <h1>Setup Your Organisation</h1>
        <CompanyForm onSave={handleSave} setShow={setShow} />
        {show && (
          <>
            <WebpageStatusTable
              data={dummyData}
              selectedPage={selectedPage}
              onViewChunks={setSelectedPage}
            />
            <div className="proceed-button">
              <button
                className="button"
                onClick={() => navigate("/chatbotintegration")}
              >
                Proceed to Next Step
              </button>
            </div>
          </>
        )}
      </div>
      {selectedPage && (
        <ViewChunksModal
          url={selectedPage}
          chunks={dummyChunks}
          onClose={() => setSelectedPage(null)}
        />
      )}
    </div>
  );
};

export default SetupOrganisation;

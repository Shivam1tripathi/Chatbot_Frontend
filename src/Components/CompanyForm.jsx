import React, { useState } from "react";

const CompanyForm = ({ onSave, setShow }) => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [meta, setMeta] = useState(false);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaPublisher, setMetaPublisher] = useState("");
  const [isFetchingMeta, setIsFetchingMeta] = useState(false);

  const fetchMetaDescription = async () => {
    if (!websiteUrl) return;
    setIsFetchingMeta(true);
    try {
      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(websiteUrl)}`
      );
      const data = await response.json();
      setMetaDescription(data.data.description || "No meta-description found.");
      setMetaTitle(data.data.title || "No meta-title found.");
      setMetaPublisher(data.data.publisher || "No meta-publisher found.");
      setMeta(true);
      setShow(true);
    } catch (error) {
      setMetaDescription("Failed to fetch meta-description.");
      setShow(false);
    } finally {
      setIsFetchingMeta(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ companyName, websiteUrl, companyDescription });
    setShow(true);
  };

  return (
    <form className="form">
      <div className="form-group">
        <label>Company Website URL</label>
        <div className="form-group-flex">
          <input
            type="url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="Enter website URL"
            required
          />
          <button
            type="button"
            onClick={fetchMetaDescription}
            disabled={isFetchingMeta}
            className="button mt-2"
          >
            {isFetchingMeta ? "Fetching..." : "Fetch Meta"}
          </button>
        </div>
      </div>
      <h1 className="text-center fs-6">OR</h1>
      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          required
        />
      </div>

      <div className="form-group">
        <label>Company Description</label>
        <textarea
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
          placeholder="Enter company description"
          required
        />
      </div>
      <button onClick={handleSubmit} className="button mb-2">
        Save and Continue
      </button>
      {meta && (
        <div className="form-group">
          <label>Meta Title</label>
          <p className="meta-description">{metaTitle}</p>
          <label>Meta Description</label>
          <p className="meta-description">{metaDescription}</p>
          <label>Meta Publisher</label>
          <p className="meta-description">{metaPublisher}</p>
        </div>
      )}
    </form>
  );
};

export default CompanyForm;

import React from "react";

const ViewChunksModal = ({ url, chunks, onClose }) => {
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      tabIndex="-1"
      aria-labelledby="viewChunksModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="viewChunksModalLabel">
              Scraped Data Chunks
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p>
              <strong>URL:</strong> {url}
            </p>
            <div
              className="chunks-container"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {chunks.map((chunk, index) => (
                <div key={index} className="mb-3 p-3 bg-light rounded">
                  <p className="mb-0">{chunk}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewChunksModal;

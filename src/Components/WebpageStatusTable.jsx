import React from "react";

const WebpageStatusTable = ({ data, onViewChunks }) => {
  return (
    <div className="table-container">
      <h2>Webpage Scraping Status</h2>
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((page) => (
            <tr key={page.id}>
              <td>{page.url}</td>
              <td>
                <span className={`status status-${page.status.toLowerCase()}`}>
                  {page.status}
                </span>
              </td>
              <td>
                <button
                  onClick={() => onViewChunks(page.url)}
                  className="button"
                >
                  View Chunks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebpageStatusTable;

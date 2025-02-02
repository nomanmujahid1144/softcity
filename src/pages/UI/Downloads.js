import React, { useState } from "react";
import "./downloads.css";
export const Download = function () {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  function downloadChart() {
    setIsDownloading(true);
    <img src="../../assets/images/User.png" alt="" />;
    setDownloadProgress(50);

    setIsDownloading(true);
  }

  return (
    <div>
      <a href="" onClick={downloadChart}>
        Download Chart
      </a>
      {isDownloading && (
        <div className="download-progress text-white">
          <div
            className="progress-bar"
            style={{ width: `${downloadProgress}%` }}
          ></div>
          <span>Downloading...</span>
        </div>
      )}
    </div>
  );
};

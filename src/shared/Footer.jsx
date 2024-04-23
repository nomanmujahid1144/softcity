import React from "react";

function Footer() {
  return (
    <footer className="footer text-secondary">
      <div className="container-fluid">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright ©
            <a
              href="https://www.bootstrapdash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoftCity Group
            </a>
            2023
          </span>
          <span className="float-none float-sm-right d-block mt-sm-0 text-center">
            Version 1.0
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

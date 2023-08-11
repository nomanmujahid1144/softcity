import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./dashdropdown.css";

function Dashdropdown() {
  const options = {
    margin: 12,
    responsiveClass: true,
    nav: true,
    items: 3,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 4,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="bg-white rounded shadow padding dashboard-menu">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <div className="carousel-content d-flex flex-lg-row flex-sm-column gap-1">
              <img
                src="chart1.jpg"
                alt="users"
                className="img-fluid menu-img"
              />
              <div>
                <h5>Sales KPI Data</h5>
                <p>This is a description text that appear as entered</p>
              </div>
            </div>
          </div>
          <div className="item ">
            <div className="carousel-content d-flex flex-lg-row flex-sm-column gap-1">
              <img
                src="chart2.jpg"
                alt="users"
                className="img-fluid menu-img"
                width={45}
              />
              <div>
                <h5>Sales KPI Data</h5>
                <p>This is a description text that appear as entered</p>
              </div>
            </div>
          </div>
          <div className="item ">
            <div className="carousel-content d-flex flex-lg-row flex-sm-column gap-1">
              <img
                src="chart3.jpg"
                alt="users"
                className="img-fluid menu-img"
                width={45}
              />
              <div>
                <h5>Sales KPI Data</h5>
                <p>This is a description text that appear as entered</p>
              </div>
            </div>
          </div>
          <div className="item ">
            <div className="carousel-content d-flex flex-lg-row flex-sm-column gap-1">
              <img
                src="chart1.jpg"
                alt="users"
                className="img-fluid menu-img"
                width={45}
              />
              <div>
                <h5>Sales KPI Data</h5>
                <p>This is a description text that appear as entered</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default Dashdropdown;

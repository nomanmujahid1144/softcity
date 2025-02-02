import React, { useState } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Context from "../../Context/DashboardContext";
import DashboardState from "../../Context/DashboardState";
import $ from "jquery";
function SidebarItem({ item, mode }) {
  const {
    showComment,
    setshowComment,
    setShowThreeColumn,
    setShowFourColumn,
    showTwoColumn,
    setShowTwoColumn,
  } = useContext(Context);
  const [open, setOpen] = useState(false);
  // const currentLink = window.location.href

  // console.log(currentLink);
  function onclick(e) {
    let a = e.target.closest(".comment");
    if (e.target.closest(".sidebar-items-parent").textContent === "Comments") {
      setshowComment(!showComment);
      a.classList.toggle("active1");
    }
    if (e.target.closest(".sidebar-items-parent").textContent !== "Comments") {
      $(".comment").removeClass("active1");
    }

    if (e.target.closest(".sidebar-items-parent").textContent === "2 Columns") {
      setShowTwoColumn(true);
      setShowThreeColumn(false);
      setShowFourColumn(false);
      setshowComment(false);
      $(".App").addClass("showtwocolumnmodal");
      $(".App").removeClass("showfourcolumnmodal");
      $(".App").removeClass("showthreecolumnmodal");
    }

    if (e.target.closest(".sidebar-items-parent").textContent === "3 Columns") {
      setShowThreeColumn(true);
      setShowTwoColumn(false);
      setshowComment(false);
      setShowFourColumn(false);
      $(".App").addClass("showthreecolumnmodal");
      $(".App").removeClass("showfourcolumnmodal");
      $(".App").removeClass("showtwocolumnmodal");
    }
    if (e.target.closest(".sidebar-items-parent").textContent === "4 Columns") {
      setShowFourColumn(true);
      setShowThreeColumn(false);
      setShowTwoColumn(false);
      setshowComment(false);
      $(".App").addClass("showfourcolumnmodal");
      $(".App").removeClass("showthreecolumnmodal");
      $(".App").removeClass("showtwocolumnmodal");
    }
  }

  return (
    <>
      <div className="sidebar-items-parent  sidebar-Item" onClick={onclick}>
        <Link
          to={item.path}
          className="sidebar-item plain comment sidebar-hover"
        >
          <div className="sidebar-title">
            <span className="menu-icon">
              {item.icon && <i className={item.icon}></i>}
            </span>
            <span className="menu-title closed-text">{item.title}</span>
          </div>
        </Link>
      </div>
    </>
  );
}
export default SidebarItem;

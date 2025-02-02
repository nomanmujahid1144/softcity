import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiTwotonePieChart } from "react-icons/ai";
import $ from "jquery";
function AdminSidebaritem({ item, index }) {
  const [open, setOpen] = useState(false);
  // const currentLink = window.location.href

  // console.log(currentLink);
  if (item.childrens) {
    return (
      <>
        <div
          className={`${open ? "sidebar-item open" : "sidebar-item"} `}
          onClick={() => setOpen(!open)}
        >
          <div className="sidebar-title  sidebar-hover">
            {item.icon && (
              <span className="menu-icon">
                <i className={item.icon}></i>
              </span>
            )}
            <span className="menu-title closed-text">{item.title}</span>
            <i className="bi-chevron-down toggle-btn menu-arrow"></i>
          </div>
          <div className={`sidebar-content`}>
            {item.childrens.map((child, index) => (
              <AdminSidebaritem key={index} item={child} />
            ))}
          </div>
        </div>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <Link
          to={item.path}
          className={`sidebar-item plain ${
            !item.icon && "child-menu"
          } sidebar-hover`}
        >
          <div className="sidebar-title">
            {item.icon && (
              <span className="menu-icon">
                <i className={item.icon}></i>
              </span>
            )}
            <span className="menu-title closed-text">{item.title}</span>
          </div>
        </Link>
      </>
    );
  }
}
export default AdminSidebaritem;

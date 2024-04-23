import React, { useContext } from "react";
import { HeartFill } from "react-bootstrap-icons";
import items from "../../data/sidebar.json";
import SidebarItem from "./SidebarItem";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import DashboardContext from "../../Context/DashboardContext";
import "./sidebar.css";
import AdminSidebaritem from "./AdminSidebarItem";

export default function Sidebar() {
  const menuMode = useContext(DashboardContext);
  const { mode, setmode } = menuMode;

  return (
    <div className={`app-sidebar dark-mode bg-dashboard text-white`}>
      <div className="sidebar" id="sidebar_softcity">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} mode={mode} />
        ))}
        <div className="d-flex justify-content-center gap-2 mt-3 button-group">
          <button
            onClick={() => setmode("light-mode")}
            className={`btn fs-7 ${
              mode === "light-mode"
                ? "btn-outline-warning active"
                : "btn-outline-light"
            } padding-fixed`}
          >
            <MdOutlineLightMode className="btn-icon fs-6" />
            <span className="closed-buttons ms-1">Light</span>
          </button>
          <button
            onClick={() => setmode("dark-mode")}
            className={`btn btn-outline-dark fs-7 ${
              mode === "dark-mode" && "active text-white"
            } padding-fixed`}
          >
            <BsMoon className={`btn-icon fs-6`} />
            <span className="closed-buttons ms-1">Dark</span>
          </button>
        </div>
      </div>
      <p className="text-center small text-white mt-5 sidebar-footer">
        Made with <HeartFill className="text-danger fs-6" /> by SoftCity
      </p>
    </div>
  );
}

import React, { useState, useContext, useEffect } from "react";
//import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Accordion from 'react-bootstrap/Accordion';

import { HeartFill } from "react-bootstrap-icons";
import items from "../../data/AdminSidebar.json";
import SidebarItem from "./SidebarItem";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import DashboardContext from "../../Context/DashboardContext";
import "./sidebar.css";
import AdminSidebaritem from "./AdminSidebarItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/createUserSlice";

export default function   AdminSidebar() {
  const menuMode = useContext(DashboardContext);
  const dispatch = useDispatch();
  const { mode, setmode } = menuMode;

  const [routes, setRoutes] = useState(items);
  const [isSoftCity, setIsSoftCity] = useState(false);
  const { id, authToken, userRole, roles } = useSelector((state) => state.auth);

  useEffect(() => {
    // Filter routes based on roles when component mounts
    const filteredRoutes = filterRoutes(roles, items);
    console.log("Filtered Routes:", filteredRoutes);
    setRoutes(filteredRoutes);
  }, [roles, items]); // Include dependencies for useEffect

  const { singleUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser({id}));
  }, [])

  
  useEffect(() => {
    if (Object.keys(singleUser).length > 0) {
      setIsSoftCity(singleUser.isSoftCityCompany);
    }
  }, [singleUser])


  
  const filterRoutes = (roles, routes) => {
    if (roles !== null) {
      return routes.map(route => {
        // Create a copy of the route object to avoid mutating the original
        const filteredRoute = { ...route };
    
        // Check if the route has an associated role
        if (route.roleKeys.length > 0) {
          const hasMatchingRole = route.roleKeys.some(roleKey => roles[roleKey]);
    
          // Check if the route has children
          if (route.childrens) {
            // Filter children based on roles
            filteredRoute.childrens = route.childrens.filter(child => {
              return child.roleKey && roles[child.roleKey];
            });
          }
    
          // Keep the route if it matches any role or has filtered children
          return hasMatchingRole || (filteredRoute.childrens && filteredRoute.childrens.length > 0)
            ? filteredRoute
            : null;
        }
    
        // Keep routes without associated roles
        return route;
      }).filter(Boolean); // Remove null entries
    }
    else {
      return routes;
    }
  };
  


  return (
    <div className={`app-sidebar dark-mode bg-dashboard text-white`}>
      <div className="sidebar pe-1" id="sidebar_softcity">
        {routes.map((item, index) => (
          item.title === "Company" && !isSoftCity ? null : (
            <AdminSidebaritem key={index} item={item} index={index} mode={mode} />
          )
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
            <BsMoon className="btn-icon fs-6" />
            <span className="closed-buttons ms-1">Dark</span>
          </button>
        </div>
        <div className="d-flex h-30 justify-content-center">
          <p className="text-center mb--10 small text-white sidebar-footer">
            Made with <HeartFill className="text-danger fs-6" /> by SoftCity
          </p>
        </div>
      </div>
    </div>
  );
}

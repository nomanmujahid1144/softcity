import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import {
  BellFill,
  FileEarmarkArrowUp,
  FunnelFill,
  Gear,
  Grid1x2Fill,
  List,
  Person,
  Power,
  Search,
  Star,
} from "react-bootstrap-icons";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../assets/images/User.png";
import logoImage from "../../assets/images/logosft.png";
import DashDropdown from "../../components/headerDropdowns/dashDropdown/DashDropdown";
import SubmitDropdown from "../../components/headerDropdowns/submitDropdown/SubmitDropdown";
import FilterDropdown from "../../components/headerDropdowns/filterDropdown/FilterDropdown";
import DashboardContext from "../../Context/DashboardContext";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import "./header.css";
import $ from "jquery";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { setUserAuth, updateAuthToken } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function Header() {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const location = useLocation();
  const menuMode = useContext(DashboardContext);
  const {
    mode,
    setfilter,
    filter,
    admin,
    setadmin,
    favMenuBtn,
    setFavMenuBtn,
  } = menuMode;
  if (location.pathname === "/admin") {
    setadmin(true);
  }
  const [showDashDropdown, setShowDashDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showFillDropdown, setShowFillDropdown] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [hide, sethide] = useState({ success: false });

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  useEffect(() => {
    let clean = function (e) {
      if (!ref.current?.contains(e.target)) {
        if (showDashDropdown) {
          sethide({ success: false });
        }
      }
      if (!ref1.current?.contains(e.target)) {
        if (showSubDropdown) sethide({ success: false });
      }
      if (!ref2.current?.contains(e.target)) {
        if (showFillDropdown) {
          setfilter(false);
          sethide({ success: false });
        }
      }
    };
    document.addEventListener("mousedown", clean);

    return () => {
      document.removeEventListener("mousedown", clean);
    };
  }, [hide, showDashDropdown, showSubDropdown, showFillDropdown]);

  const hidesidebar = function (e) {
    $(".App").toggleClass("closed-sidebar");
  };

  const onSearchChange = debounce((e) => {
    const text = e.target.value;

    if (text.length === 0) {
      search.delete("query");
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set("query", text);
      setSearch(search, {
        replace: true,
      });
    }
  }, 350);

  const handleFavorite = () => {
    if (localStorage.getItem("fav")) {
      console.log("its true");
      setFavMenuBtn((curr) => !curr);
    }
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("AUTH_TOKEN");
    dispatch(setUserAuth({ authToken: null, userRole: null }));
    alert.show("Logout Successfully");
    navigate("/");
  };

  return (
    <Navbar
      className={`bg-dashboard dark-mode `}
      variant="light"
      expand="lg"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logoImage}
            className="img-fluid menu-logo"
            alt="Softcity Group Logo"
            width={200}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto ms-4 flex-row mega-menu">
          <Nav.Link className="menu-toggler" onClick={hidesidebar}>
            <List className="react-menu-icon" />
          </Nav.Link>
          <li ref={ref} className="nav-item dropdown">
            <Link
              className="nav-link link-hover"
              role="button"
              onClick={() => {
                sethide({ success: true });
                setShowDashDropdown(!showDashDropdown);
                setShowSubDropdown(false);
                setShowFillDropdown(false);
              }}
              style={{ marginLeft: "1rem" }}
            >
              <Grid1x2Fill className="me-2  icons-menu" />
              <span className="menu-icons-text">Dashboard</span>
            </Link>
            <div id="dashDropdown" ref={ref}>
              {hide?.success && showDashDropdown && <DashDropdown />}
            </div>
          </li>
          <li ref={ref1} className="nav-item position-relative">
            <Link
              className="nav-link"
              role="button"
              onClick={() => {
                sethide({ success: true });
                setShowSubDropdown(!showSubDropdown);
                setShowDashDropdown(false);
                setShowFillDropdown(false);
              }}
              style={{ marginLeft: "1rem" }}
            >
              <FileEarmarkArrowUp className="me-2 icons-menu" />
              <span className="menu-icons-text"> Submit Data</span>
            </Link>
            <div id="submitDropdown">
              {hide?.success && showSubDropdown && <SubmitDropdown />}
            </div>
          </li>
          <li ref={ref2} className="nav-item dropdown">
            <Link
              className="nav-link"
              role="button"
              onClick={() => {
                sethide({ success: true });
                setShowFillDropdown(!showFillDropdown);
                setShowDashDropdown(false);
                setShowSubDropdown(false);
                setfilter(true);
              }}
              style={{ marginLeft: "1rem" }}
            >
              <FunnelFill className="me-2 icons-menu" />
              <span className="menu-icons-text">Filters</span>
            </Link>
            <div id="filterDropdown">
              {hide?.success && showFillDropdown && <FilterDropdown />}
            </div>
          </li>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="ms-auto position-relative">
            <Form.Control
              type="search"
              className="ps-5"
              placeholder="Search..."
              aria-label="Search"
              onBlur={() => setFocused(false)}
              onFocus={() => setFocused((focused) => !focused)}
              onChange={onSearchChange}
              defaultValue={search.get("query") ?? ""}
            />
            <Button variant="link" className="position-absolute start-0 top-0 top-search-bar">
              <Search />
            </Button>
          </Form>
          <Nav className="softcity-navbar align-items-center gap-1">
            <li className="nav-item dropdown">
              <Link
                className="nav-link noti-link position-relative"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BellFill className="menu-notification mx-1" />
                <span className="notification-count position-absolute">
                  12<span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              <ul
                className={`dropdown-menu dropdown-menu-end border-0 shadow ${
                  mode === "dark-mode" && "dark-mode menu"
                }`}
                id="notificationDropdown"
                style={{ maxWidth: "20rem" }}
              >
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={userImage}
                          className="img-fluid rounded-circle"
                          alt="user Profile Pic"
                          width="50"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className="fw-semibold mb-0 small">
                          You should also be aware that carousels in general
                        </h6>
                        <small className="text-muted small">2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={userImage}
                          className="img-fluid rounded-circle"
                          alt="user Profile Pic"
                          width="50"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className="fw-semibold mb-0 small">
                          You should also be aware that carousels in general
                        </h6>
                        <small className="text-muted small">2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={userImage}
                          className="img-fluid rounded-circle"
                          alt="user Profile Pic"
                          width="50"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className="fw-semibold mb-0 small">
                          You should also be aware that carousels in general
                        </h6>
                        <small className="text-muted small">2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={userImage}
                          className="img-fluid rounded-circle"
                          alt="user Profile Pic"
                          width="50"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className="fw-semibold mb-0 small">
                          You should also be aware that carousels in general
                        </h6>
                        <small className="text-muted small">2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={userImage}
                          className="img-fluid rounded-circle"
                          alt="user Profile Pic"
                          width="50"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className="fw-semibold mb-0 small">
                          You should also be aware that carousels in general
                        </h6>
                        <small className="text-muted small">2 min ago</small>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link profile-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={userImage}
                      className="img-fluid rounded-circle"
                      alt="user Profile Pic"
                      width="35"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <h6 className="fw-semibold mb-0 small user-dark">
                      Franklin Jr.
                    </h6>
                    <small className="text-muted small user-info-dark">
                      Super Admin
                    </small>
                  </div>
                </div>
              </Link>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                <li>
                  <Link className="dropdown-item fs-7" to="/">
                    <Person className="text-primary me-2" /> Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-nowrap fs-7" to="/">
                    <Gear className="text-primary me-2 " /> Account Setting
                  </Link>
                </li>
                <li>
                  <Link
                    // onClick={() => setFavMenuBtn((curr) => !curr)}
                    onClick={handleFavorite}
                    className="dropdown-item text-nowrap fs-7"
                    to="/"
                  >
                    <Star className="text-primary me-2 " /> Favourites
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link onClick={handleLogOut} className="dropdown-item" to="/">
                    <Power className="text-danger me-2" /> Logout
                  </Link>
                </li>
              </ul>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

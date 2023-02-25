import React from "react";
import PropTypes from "prop-types";

let abc = "Twitter";
export default function navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} position-sticky top-0`}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="https://www.google.com/" rel="noreferrer" target={"_blank"}><strong><i className="fa fa-google" aria-hidden="true"></i><span className="g-blue">G</span><span className="o-red">o</span><span className="o-yellow">o</span><span className="g-blue">g</span><span className="l-green">l</span><span className="o-red">e</span></strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link nav-link-${props.mode==='light'?'dark':'light'}`} id="nav-link-a" aria-current="page" rel="noreferrer" href="https://www.facebook.com/" target={"_blank"}
               ><i className="fa fa-facebook-f" aria-hidden="true"></i> Facebook</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link nav-link-${props.mode==='light'?'dark':'light'}`} id="nav-link-a" href="https://www.instagram.com/" rel="noreferrer" target={"_blank"}>{/* <p className="Instagram"></p> */}
                <i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link nav-link-${props.mode==='light'?'dark':'light'}`} id="nav-link-a" href="https://www.twitter.com/" rel="noreferrer" target={"_blank"}><i className="fa fa-twitter" aria-hidden="true"></i> {abc}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link nav-link-${props.mode==='light'?'dark':'light'}`} id="nav-link-a" href="https://www.youtube.com/" rel="noreferrer" target={"_blank"}><i className="fa fa-youtube-play" aria-hidden="true"></i> YouTube</a>
            </li>
          </ul>
          <div className={`form-check form-switch me-2 text-${props.mode==='light'?'dark':'light'}`}>
            <input className={`form-check-input form-check-input-${props.mode==='dark'?'light':'dark'}`} onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="SwitchCheckDefault">Enable Light Mode</label>
          </div>
          <form className="d-flex">
            <input className={`form-control me-2 bg-${props.mode}`} id="searchform" type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-outline-${props.mode==='light'?'secondary':'light'}`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

navbar.prototype = { title: PropTypes.string.isRequired};

navbar.defaultProps = {
    title: 'Google Is Hear'
}

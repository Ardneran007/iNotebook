import React,{useEffect} from "react";
import {useLocation} from "react-router-dom"


function Navbar() {

    let location=useLocation();
    useEffect(()=>{
        console.log(location.pathname);
    },[location])
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            iNotebook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className={`nav-link ${location.pathname==="/"?"active":""}`} href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className={`nav-link ${location.pathname==="/about"?"active":""}`} href="/about">
                About <span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

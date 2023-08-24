import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo-hnue.jpg";
import "../component/header-sass.scss";
import "../component/reset.scss"

function App() {
  return (
    <>
      <header className="global-header">
        <div id="gh-main-cnt" className="u-flex-center-ver u-position-relative u-padding-s-hor u-padding-l-hor-from-xl">
          <a className="branding" href="">
            <img
              className="logo-journal"
              src="https://s3-alpha-sig.figma.com/img/16fa/9f45/f069849cb1f016f65e50d08d565e101e?Expires=1693785600&Signature=IRW0cKlFRl17mIS0QISlOo~nD3K33LTGsxtBf3-8WC9nW0GogLlALcPt4xBEmTNxuMuUwiJHlyqdZpD1JZisHDT4~7TkJHqaLR5dmupZ64M4TWn1TCPtPLkpfEWGzapMA8ScXZTHjXPo-nki22D~VJCZufUG~Yh--qtbbOsB3yqUCZnOlHbKJlgeTIrjVZaFxi6Jxb-f9VXosNwlPjM3PhUKS4yLixM1Q3Eu52F9fBAVEDBpYQdOnmWZfF3zrllSgSrP2boJGmVIjQMJzwa5ojkE6d1sPxUM35aaQpoDuzLaaY3KZPlMStEG8o72RM8N-nJxC-RFgGMPPepwq8z9VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              height={60}
              alt=""
            />
          </a>
          <div class="gh-profile-container gh-move-to-spine u-hide-from-print">
            <a
              class="link-button link-button-secondary link-button-small u-margin-s-right"
              href="#"
              id="gh-cta-btn"
              data-aa-region="header"
              data-aa-name="Register"
            >
              <span class="link-button-text">Register</span>
            </a>
            <a
              class="link-button link-button-primary link-button-small"
              href="#"
              id="gh-signin-btn"
              data-aa-region="header"
              data-aa-name="Sign in"
            >
              <span class="link-button-text">Sign in</span>
            </a>
          </div>
        </div>

        {/*Branding */}
        <div className="header-branding-book"></div>

        {/* nav-bootstrap */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>    
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">The Journal</a></li>
                                    <li><a class="dropdown-item" href="#">Editoral board</a></li>
                                    <li><a class="dropdown-item" href="#">Submission</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Topic
                                </a>    
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Natural science</a></li>
                                    <li><a class="dropdown-item" href="#">Social science</a></li>
                                    <li><a class="dropdown-item" href="#">Educational science</a></li>
                                    <li><a class="dropdown-item" href="#">Special editions</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
      </header>
    </>
  );
}

export default App;

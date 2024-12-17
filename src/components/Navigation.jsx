import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1>nc-news</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#articles">articles</a></li>
        <li><a href="#topics">topics</a></li>
        <li><a href="#users">users</a></li>
        <li><a href="#settings">settings</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

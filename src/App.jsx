import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header><h1>Articles</h1></header>
        <div className="main">
          <Navigation />
          <div className="content">
            <Routes>
              <Route path="/" element={<ArticleList />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

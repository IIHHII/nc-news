import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>nc-news</h1>
        </header>
        <div className="main">
          <Navigation />
          <div className="content">
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/articles/:article_id" element={<SingleArticle />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

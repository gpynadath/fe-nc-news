import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

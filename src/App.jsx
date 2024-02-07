import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import UserContext from "./context/UserContext";
import Topics from "./components/Topics";
import TopicArticles from "./components/TopicArticles";

function App() {
  const [user, setUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topic" element={<TopicArticles />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;


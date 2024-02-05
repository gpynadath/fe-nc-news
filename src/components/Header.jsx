import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>NC News</h1>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
    </div>
  );
};

export default Header;

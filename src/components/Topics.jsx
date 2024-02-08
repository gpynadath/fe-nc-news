import React, { useEffect, useState } from "react";
import { getTopicImage, getTopics } from "../api/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  getTopics().then(({ data }) => {
    setTopics(data.data);
  })

  return (
    <div>
      <h2>Topics</h2>
      {topics.map((topic) => {
        return (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              <h3>{topic.slug}</h3>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Topics;

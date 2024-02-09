import React, { useEffect, useState } from "react";
import { getTopics } from "../api/api";
import { Link } from "react-router-dom";
import "../styles/topics.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  getTopics().then(({ data }) => {
    setTopics(data.data);
  });

  return (
    <div>
      <h2>Topics</h2>
      <ul className="topics">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    <Link to={`/topics/${topic.slug}`} id="topicLink">
                      <h3>{topic.slug}</h3>
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;

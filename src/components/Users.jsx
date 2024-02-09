import React, { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(({ data }) => {
      console.log(data.users);
      setUsers(data.users);
    });
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.username}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Name: {user.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    Username: {user.name}
                  </Typography>
                  <img src={user.avatar_url} alt="userImage" id="userImage" />
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;

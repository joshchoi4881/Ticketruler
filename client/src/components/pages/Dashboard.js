import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SHOWS from "../../data/shows";

const Dashboard = () => {
  return (
    <div className="content">
      <h1>Shows</h1>
      <div className="flex flex-row w-screen justify-around flex-wrap gap-[24px]">
        {SHOWS.map((show) => (
          <Card key={show.id} className="w-[40%] rounded shadow p-[48px]">
            <Link to={`/show/${show.id}`}>
              <CardContent className="flex flex-col justify-center text-center gap-[24px]">
                <h2>{show.title}</h2>
                <p>{show.artist}</p>
                <img src={`/images/${show.image}`} alt={show.title} />
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Contact = () => {
  return (
    <div className="content">
      <h1>Contact</h1>
      <Card className="rounded shadow p-[48px]">
        <CardContent className="flex flex-col justify-center text-center">
          <p>Contact us at support@ticketruler.xyz</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;

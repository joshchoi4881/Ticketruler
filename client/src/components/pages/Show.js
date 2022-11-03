import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Payment from "../payment/Payment";
import SHOWS from "../../data/shows";

const DEFAULT_SHOW = {};
const DEFAULT_AMOUNT = 1;
const DEFAULT_PAID = false;

const Show = () => {
  const [show, setShow] = useState(DEFAULT_SHOW);
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [paid, setPaid] = useState(DEFAULT_PAID);
  const { showId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getShows();
  }, []);

  const getShows = () => {
    const show = SHOWS.filter((show) => show.id === Number(showId));
    if (show.length > 0) {
      setShow(show[0]);
    } else {
      return navigate("/404");
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="content">
      <h1>{show.title}</h1>
      <Card key={show.id} className="rounded shadow p-[48px]">
        <CardContent className="flex flex-col justify-center text-center gap-[48px]">
          {paid ? (
            <>
              <h2>Thank you for choosing Ticketruler!</h2>
            </>
          ) : (
            <>
              <h2>{show.artist}</h2>
              <p>Price per ticket: ${show.price}</p>
              <p>
                How many tickets would you like?{" "}
                <span className="text-red-900">*</span>
              </p>
              <input
                type="number"
                value={amount}
                required
                className="border-solid border-[2px] border-black"
                onChange={(e) => handleAmountChange(e)}
              />
              <Payment price={show.price} amount={amount} setPaid={setPaid} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Show;

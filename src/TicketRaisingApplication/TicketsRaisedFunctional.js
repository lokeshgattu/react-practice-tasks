import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TicketsRaisedClass from "./TicketsRaisedClass";

function TicketsRaisedFunctional() {
  const { ticketsraised } = useParams(); //ticketsraised which you got from useParams() is in stringify form, but not in encoded form, don't misunderstand as like it's in encoded form and don't decode it, just parse it and pass it as props.

  const parsedData = JSON.parse(ticketsraised);
  const navigate = useNavigate();
  const params = useParams();

  console.log(parsedData);

  return (
    <>
      <TicketsRaisedClass
        ticketsraisedinfo={parsedData}
        navigate={{ navigate }}
        data={params}
      />
    </>
  );
}

export default TicketsRaisedFunctional;

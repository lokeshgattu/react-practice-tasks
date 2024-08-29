import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TicketsClosedClass from "./TicketsClosedClass";

function TicketsClosedFunctional() {
  const { ticketsclosed } = useParams(); //ticketsraised which you got from useParams() is in stringify form, but not in encoded form, don't misunderstand as like it's in encoded form and don't decode it, just parse it and pass it as props.

  const parsedData = JSON.parse(ticketsclosed);
  const navigate = useNavigate();

  console.log(parsedData);

  return (
    <>
      <TicketsClosedClass
        ticketsclosedinfo={parsedData}
        navigate={{ navigate }}
      />
    </>
  );
}

export default TicketsClosedFunctional;

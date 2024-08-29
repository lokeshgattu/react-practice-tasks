import { useNavigate } from "react-router-dom";
import "./StylingFiles/MainPageFun.css";
import { useState } from "react";
function MainPageFun() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  let navigate = useNavigate();
  let handleUser = (e) => {
    navigate("/userlogin");
  };

  let handleAdmin = (e) => {
    navigate("/adminlogin");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (one) {
      setOne(false);
    } else {
      setOne(true);
    }
  };
  const handleQuestion2 = (e) => {
    e.preventDefault();
    if (two) {
      setTwo(false);
    } else {
      setTwo(true);
    }
  };
  const handleQuestion3 = (e) => {
    e.preventDefault();
    if (three) {
      setThree(false);
    } else {
      setThree(true);
    }
  };
  const handleQuestion4 = (e) => {
    e.preventDefault();
    if (four) {
      setFour(false);
    } else {
      setFour(true);
    }
  };

  return (
    <>
      <h1 id="text-heading">Ticket Raising Application</h1>
      <div>
        <h2 className="textone">
          Disclaimer To All New Users:- If you don't know how to raise a ticket,
          click on the questions below and read them once, So that you can
          start!
        </h2>
        <div>
          <div>
            <h1 className="question-heading" onClick={(e) => handleSubmit(e)}>
              How to raise your ticket ?
            </h1>
            {one && (
              <div>
                <h3>To raise a ticket, follow these steps:</h3>
                <ul>
                  <li> Identify your specific customer issue.</li>
                  <li>
                    Choose the appropriate channel to contact the relevant
                    support team.
                  </li>
                  <li>
                    Fill out the ticket form with all relevant details,
                    including subject, requester's name, requester's email,
                    assignee, and team1.
                  </li>
                  <li>Write your message and click "Send"</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <h1
              className="question-heading"
              onClick={(e) => handleQuestion2(e)}
            >
              How do I write a ticket request?
            </h1>
            {two && (
              <div>
                <h3>How to Write the Perfect Support Ticket</h3>
                <ul>
                  <li> Write a concise subject line..</li>
                  <li>Use the correct category.</li>
                  <li>Give a full description of your problem.</li>
                  <li>It's fine to reach out after 24 hours.</li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <h1
              className="question-heading"
              onClick={(e) => handleQuestion3(e)}
            >
              What are the basic questions we would ask the caller while
              creating a ticket?
            </h1>
            {three && (
              <div>
                <h3>Exploratory probing questions </h3>
                <ul>
                  <li> How can I help?.</li>
                  <li>Could you give me some background about the issue?</li>
                  <li>
                    Can you tell me more about the present situation/problem?
                  </li>
                  <li>How is this problem affecting you?</li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <h1
              className="question-heading"
              onClick={(e) => handleQuestion4(e)}
            >
              How to ask the right questions in customer service?
            </h1>
            {four && (
              <div>
                <p>
                  Consider questions like: "What background information can you
                  provide on the issue you're experiencing?", "What exactly went
                  wrong?" and "What can we do to better meet your needs?"
                  Getting your customers to ponder and explain the crux of the
                  matter can provide more clarity about the most effective
                  solution.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="btn-container">
          <div id="user-btn">
            <button onClick={(e) => handleUser(e)}>User Login</button>
          </div>
          <div id="admin-btn">
            <button onClick={(e) => handleAdmin(e)}>Admin Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPageFun;

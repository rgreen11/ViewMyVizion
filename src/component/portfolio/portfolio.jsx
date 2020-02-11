import React, { useState } from "react";
import "./portfolio.scss";
const obj = {
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false
};
export default () => {
  const [stretch, setStretch] = useState(obj);

  function toggle(e) {
    let cpy = { ...stretch };
    cpy[e.target.id] = !cpy[e.target.id];
    setStretch(cpy);
  }

  return (
    <div className="portfolio">
      <div className="panels">
        <div
          id="1"
          className={`${
            stretch[1] ? "open open-active" : ""
          }  panel panel1 img-fluid`}
          onClick={e => toggle(e)}
        >
          <p id="1">Hey</p>
          <p id="1">Let's</p>
          <p id="1">Dance</p>
        </div>

        <div
          id="2"
          className={`${
            stretch[2] ? "open open-active" : ""
          }  panel panel2 img-fluid`}
          onClick={e => toggle(e)}
        >
          <p id="2">Give</p>
          <p id="2">Take</p>
          <p id="2">Receive</p>
        </div>

        <div
          id="3"
          className={`${
            stretch[3] ? "open open-active" : ""
          }  panel panel3 img-fluid`}
          onClick={e => toggle(e)}
        >
          <p id="3">Experience</p>
          <p id="3">It</p>
          <p id="3">Today</p>
        </div>

        <div
          id="4"
          className={`${
            stretch[4] ? "open open-active" : ""
          }  panel panel4 img-fluid`}
          onClick={e => toggle(e)}
        >
          <p id="4">Give</p>
          <p id="4">All</p>
          <p id="4">You can</p>
        </div>

        <div
          id="5"
          className={`${
            stretch[5] ? "open open-active" : ""
          }  panel panel5 img-fluid`}
          onClick={e => toggle(e)}
        >
          <p id="5">Life</p>
          <p id="5">In</p>
          <p id="5">Motion</p>
        </div>
      </div>
    </div>
  );
};

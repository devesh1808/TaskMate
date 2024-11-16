import React from "react";

export const ShowTask = () => {
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        <li>
          <p>
            <span className="name">Task A</span>
            <span className="time">02:09:01 AM 14/09/2030 </span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li>
      </ul>
    </section>
  )
};
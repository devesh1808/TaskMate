import React from "react";

export const ShowTask = () => {
  const tasks = [
    { id: 1001, name: "Task A", time: "02:09:01 AM 14/09/2030" },
    { id: 1002, name: "Task B", time: "02:09:01 AM 15/09/2030" },
    { id: 1003, name: "Task C", time: "02:09:01 AM 16/09/2030" },
  ];

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
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

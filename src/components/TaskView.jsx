import React from "react";
import "./taskview.css";
import { GrClose } from "react-icons/gr";

export default function TaskView({ todo, viewOpen, setViewOpen }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="closebtn"
          onClick={() => {
            setViewOpen(!viewOpen);
          }}
        >
          <GrClose />
        </div>
        <div className="form formview">
          <h3 className="formTitle">View Task</h3>
          <label htmlFor="title">
            Title
            {/* <p>{todo.title}</p> */}
          </label>

          <label htmlFor="desc">
            Decription
            {/* <p>{todo.desc}</p> */}
          </label>
          <label htmlFor="category">
            Category
            {/* <p>{todo.category}</p> */}
          </label>
          <label htmlFor="status">{/* Status <p>{todo.status}</p> */}</label>
          <div className="priorty_zone">
            <p>Priorty</p>
            {/* <p className={`${todo.priority}`}>{todo.priority}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

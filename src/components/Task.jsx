import React, {useState} from "react";
import "./style.css";
import MoreFilter from "./MoreFilter";
import Button from "./Button";
import Category from "./Category";
import TaskModel from "./TaskModel";
import TaskContent from "./TaskContent";

const optionsList = [
  {
    value: "NONE",
    label: "None",
    color: "gray",
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
    color: "crimson",
  },
  {
    value: "STANDBY",
    label: "Standby",
    color: "orange",
  },
  {
    value: "IN-PROGRESS",
    label: "In-progress",
    color: "blue",
  },
  {
    value: "ACTIVE",
    label: "Active",
    color: "green",
  },
];

export default function Task({searchTask}) {
  
  const [modelOpen, setModelOpen] = useState(false);
  
  return (
    <div className="task">
      <div className="top">
        <div
          className="add_task"
          onClick={() => {
            setModelOpen(!modelOpen);
          }}
        >
          <Button />
        </div>
        <div className="filter">
          <MoreFilter />
        </div>
        <div className="customize">
          <Category toggleLabel="Category" options={optionsList} />
        </div>
      </div>
      <div className="bottom">
        <TaskModel
          type="Add"
          modelOpen={modelOpen}
          setModelOpen={setModelOpen}
        />
      </div>
      <TaskContent searchTask={searchTask} />
    </div>
  );
}

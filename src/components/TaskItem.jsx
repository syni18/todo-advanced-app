import "./taskitem.css";
import { format } from "date-fns";
import TaskModel from "./TaskModel";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Checkbutton from "./Checkbutton";
import { useDispatch } from "react-redux";
import { AiFillEye } from "react-icons/ai";
import Timer from './timercounter/Timer';
import { MdDeleteForever } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { deleteTodo, updateTodo } from "../slices/TodoSlice";

function TaskItem({ todo }) {
  const dispatch = useDispatch();
  const [typeChange, setTypeChange] = useState("");
  const [vb, setVb] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [updateModelopen, setUpdateModelopen] = useState(false);  

  useEffect(() => {
    if (todo.status === "complete") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };
  const handleEdit = () => {
    setTypeChange("Update")
    setUpdateModelopen(true);
  };
  const handleView = () => {
    console.log("viewing");
    setTypeChange("edit")
    setUpdateModelopen(true);

  };
  const handleTick = () => {
    setIsChecked(!isChecked);
    dispatch(
      updateTodo({
        ...todo,
        status: isChecked ? "incomplete" : "complete",
      })
    );
  };
  const handleVisible = () => {
    setVb(!vb);
  }
  return (
    <>
      <div className="item-wrapper">
        <div className="item-details">
          <Checkbutton isChecked={isChecked} handleTick={handleTick} />
          <div className="item-text">
            <div className="item-head">
              <p className="item-title">{todo.title}</p>
              <p className={`item-${todo.priority}`}>{todo.priority}</p>
            </div>
            <p className="item-time">
              {format(new Date(todo.time), "p")}
            </p>
          </div>
          <div className="item-action">
            <div
              className="item-view"
              onClick={handleView}
              onKeyDown={handleView}
              role="button"
              tabIndex={0}
            >
              <AiFillEye />
            </div>
            <div
              className="item-delete"
              onClick={handleDelete}
              onKeyDown={handleDelete}
              role="button"
              tabIndex={0}
            >
              <MdDeleteForever />
            </div>
            <div
              className="item-edit"
              onClick={handleEdit}
              onKeyDown={handleEdit}
              role="button"
              tabIndex={0}
            >
              <FiEdit />
            </div>
          </div>
        </div>
        <span className="spanicon"
          onClick={handleVisible}
        ></span>
        {vb == true ? <Timer/> : <p className="hidenVb">{todo.desc}</p>}
      </div>

      <TaskModel
        todo={todo}
        type={typeChange}
        modelOpen={updateModelopen}
        setModelOpen={setUpdateModelopen}
      />
    </>
  );
}

export default TaskItem;

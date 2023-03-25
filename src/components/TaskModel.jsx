import "./taskmodel.css";
import "./taskview.css";
import {v4 as uuid} from 'uuid';
import { toast } from "react-hot-toast";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { addTodo, updateTodo } from "../slices/TodoSlice";

export default function TaskModel({type, modelOpen, setModelOpen, todo }) {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("None");

  const dispatch = useDispatch();

  useEffect(()=> {
    if(type === 'Update' && todo) {
      setTitle(todo.title);
      setdesc(todo.desc);
      setCategory(todo.category);
      setStatus(todo.status);
      setPriority(todo.priority);
    } else {
      setTitle("");
      setdesc("");
      setCategory("None");
      setStatus("incomplete");
      setPriority(null);
    }
  },[type, todo, modelOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === '') {
      toast.error('Please enter a title.');
      return;
    }
    if(title && status) {
      if(type === 'Add') {
        dispatch(addTodo({
            id: uuid(),
            title,
            desc,
            category,
            status,
            priority,
            time: new Date().toLocaleString(),
        }));
        toast.success('Task Added Successfully');
        setModelOpen(false);
      }
      if(type === 'Update'){
        // console.log('Updating task');
        if(todo.title !== title || todo.status !== status){
          dispatch(updateTodo({
            ...todo,
            title,
            desc,
            category,
            status,
            priority,
          }));
        } else {
          toast.error("No change !!!")
        }
      }
       
      setModelOpen(false);
    }
    // console.log({title, status,category, desc, priority});
    setTitle("");
    setdesc("");
    setPriority(null);
    setCategory("None");
    setStatus("incomplete");
  }
  return (
    modelOpen &&
    (type === "edit" ? (
      <div className="wrapper">
        <div className="container">
          <div
            className="closebtn"
            onClick={() => setModelOpen(!modelOpen)
          }>
            <GrClose />
          </div>
          <div className="form formview">
            <h3 className="formTitle">View Task</h3>
            <label htmlFor="title">
              Title
              <p>{todo.title}</p>
            </label>

            <label htmlFor="desc">
              Decription
              <p>{todo.desc}</p>
            </label>
            <label htmlFor="category">
              Category
              <p>{todo.category}</p>
            </label>
            <label htmlFor="status">Status <p>{todo.status}</p></label>
            <div className="priorty_zone">
              <p>Priorty</p>
              <p className={`${todo.priority}`}>{todo.priority}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="wrapper">
        <div className="container">
          <div
            className="closebtn"
            onClick={() => {
              setModelOpen(!modelOpen);
            }}
          >
            <GrClose />
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="formTitle">
              {type === "Update" ? "Update" : "Add"} Task
            </h3>
            <label htmlFor="title">
              Title
              <input
                type="text"
                name=""
                id="title"
                placeholder="Title"
                value={title}
                maxLength={12}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label htmlFor="desc">
              Decription
              <input
                type="text"
                name=""
                id="desc"
                placeholder="Description here..."
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
              />
            </label>
            <label htmlFor="category">
              Category
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Cancelled">Cancelled</option>
                <option value="Standby">Standby</option>
                <option value="In-progress">In-progress</option>
                <option value="Active">Active</option>
              </select>
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className="priorty_zone">
              <p>Priorty</p>
              <div className="radio-button">
                <input
                  type="radio"
                  id="low"
                  name="radios"
                  value="low"
                  checked={priority === "low"}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor="low">Low</label>
                <input
                  type="radio"
                  id="medium"
                  name="radios"
                  value="medium"
                  checked={priority === "medium"}
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor="medium">Medium</label>
                <input
                  type="radio"
                  id="high"
                  name="radios"
                  value="high"
                  onChange={(e) => setPriority(e.target.value)}
                />
                <label htmlFor="high" value={"high"}>
                  High
                </label>
              </div>
            </div>
            <div className="btn-container">
              <button type="submit">
                {type === "Update" ? "Update" : "Add"} Task
              </button>
              <button
                type="button"
                onClick={() => {
                  setModelOpen(!modelOpen);
                }}
                onKeyDown={() => {
                  setModelOpen(!modelOpen);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    ))
  );
}

import React from "react";
import "./taskcontent.css";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskContent({ searchTask }) {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedList = [...todoList];
  sortedList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const categoryFilter = useSelector((temp) => temp.todo.categoryStatus);

  const filterTodoList = sortedList.filter((item) => {
    if (filterStatus === "all" && categoryFilter === "None") {
      return true;
    }
    if (filterStatus === "incomplete" && categoryFilter === "None") {
      return item.status === filterStatus;
    }
    if (filterStatus === "complete" && categoryFilter === "None") {
      return item.status === filterStatus;
    }
    else if (
      filterStatus === "all" &&
      (item.category === "Active" ||
        item.category === "In-progress" ||
        item.category === "Standby" ||
        item.category === "Cancelled")
    ) {
      return (item.category === categoryFilter && filterStatus === "all");
    }
    else if (
      filterStatus === "incomplete" &&
      (item.category === "Active" ||
        item.category === "In-progress" ||
        item.category === "Standby" ||
        item.category === "Cancelled")
    ) {
      return (item.category === categoryFilter && filterStatus === "incomplete");
    }
    else if (
      filterStatus === "complete" &&
      (item.category === "Active" ||
        item.category === "In-progress" ||
        item.category === "Standby" ||
        item.category === "Cancelled")
    ) {
      return (item.category === categoryFilter && filterStatus === "complete");
    }
    return true;
  });

  return (
    <div className="taskitem">
      {filterTodoList && filterTodoList.length > 0 ? (
        filterTodoList.map((ele) => {
          if (searchTask === "") {
            return <TaskItem todo={ele} key={ele.id} />;
          } else if (
            ele.priority.toLowerCase().includes(searchTask.toLowerCase())
          ) {
            return <TaskItem todo={ele} key={ele.id} />;
          }
        })
      ) : (
        <p className="emptytask">No Task Found</p>
      )}
    </div>
  );
}

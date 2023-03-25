import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { updateFilterStatus } from "../slices/TodoSlice";
import "./morefilter.css";

export default function MoreFilter() {

  // const filterStatus = useSelector((state) => state.todo.filterStatus);
  
  // const updateFilter = (e) => {
  //   console.log("updateSelect");
  //   dispatch(updateFilterStatus(e.target.value));
  // };
  const [open, setOpen] = useState(false);

  return (
    <div className="morefilter">
      <div className="filter-container">
        <div className={`filter-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <FilterItem value="all" />
            <FilterItem value="incomplete" />
            <FilterItem value="complete" />
          </ul>
        </div>
      </div>
    </div>
  );
}
function FilterItem(props) {
  const dispatch = useDispatch();

  const updateFilter = () => {
    dispatch(updateFilterStatus(props.value));
  }
  return <li className="filteritem" onClick={updateFilter}>{props.value}</li>;
}

import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTaskCategory } from "../slices/TodoSlice";

import './category.css';

const Category = ({ toggleLabel, options }) => {
  
  const dispatch = useDispatch();
  
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      toggleDropdown();
    }
  };
  
  const updateCategory = () => {
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const onSelect = (option) => {
    setSelectedOption(option);
    dispatch(updateTaskCategory(option.label));
    toggleDropdown();
    // console.log(option.label);
  };

  return (
    <div onClick={toggleDropdown} className="dropdown-container">
      <span className="dropdown-label">{toggleLabel}:</span>
      <span
        className="dropdown-value"
        onClick={updateCategory}
        style={{
          backgroundColor: selectedOption.color,
        }}
      >
        {!selectedOption && "None"}
        {selectedOption.value}
      </span>

      {showDropdown && (
        <div ref={wrapperRef} className="dropdown-list">
          {options.map((option) => {
            return (
              <div onClick={() => onSelect(option)} className="dropdown-item">
                <span
                  className="circle-icon"
                  style={{ backgroundColor: option.color }}
                >
                  &nbsp;&nbsp;
                </span>
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;

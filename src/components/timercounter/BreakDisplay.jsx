import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function BreakDisplay({ time, onChange, modificator }) {
  const { INCREASE, DECREASE } = modificator;

  return (
    <div className="timer__small-section">
      <p id="break-label" className="timer__small-label">
        Break Length
      </p>
      <div id="break-length" className="timer__small-display">
        <button
          type="button"
          id="break-decrement"
          className="button button_type_small"
          onClick={() => onChange(DECREASE)}
        >
          <AiOutlineMinus className="fas fa-chevron-down" />
        </button>
        <span className="timer__small-value">{time / 60}</span>
        <button
          type="button"
          id="break-increment"
          className="button button_type_small"
          onClick={() => onChange(INCREASE)}
        >
          <AiOutlinePlus className="fas fa-chevron-up" />
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import {FaGreaterThan} from "react-icons/fa";

export default function SessionDisplay({ time, onChange, modificator }) {
  const { INCREASE, DECREASE } = modificator;

  return (
    <div className="timer__small-section">
      <p id="session-label" className="timer__small-label">
        Session Length
      </p>
      <div id="session-length" className="timer__small-display">
        <button
          type="button"
          id="session-decrement"
          className="button button_type_small"
          onClick={() => onChange(DECREASE)}
        >
          <FaGreaterThan className="downarrow" />
        </button>
        <span className="timer__small-value">{time / 60}</span>
        <button
          type="button"
          id="session-increment"
          className="button button_type_small"
          onClick={() => onChange(INCREASE)}
        >
          <FaGreaterThan className="uparrow" />
        </button>
      </div>
    </div>
  );
};

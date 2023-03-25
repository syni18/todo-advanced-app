import React from 'react'
import {VscDebugRestart} from 'react-icons/vsc';

export default function TimerButtons({ onStart, onReset, playSymbol }) {
  return (
    <div className="timer__buttons">
      <button
        type="button"
        id="start_stop"
        className="button button_type_big"
        onClick={onStart}
      >
        {playSymbol}
      </button>
      <button
        type="button"
        id="reset"
        className="button button_type_big"
        onClick={onReset}
      >
        <VscDebugRestart className="resetbtn" />
      </button>
    </div>
  );
};
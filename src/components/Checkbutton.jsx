import React from 'react';
import './checkbutton.css';
export default function Checkbutton({isChecked, handleTick}) {
  return (
    <div className="custom-rounded-checkbox approved-checkbox">
      <input type="checkbox" checked={isChecked} onClick={() => handleTick()} />
      <span
        onClick={() => handleTick()}
        tabIndex={1}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            handleTick();
          }}}
      />
    </div>
  );
}

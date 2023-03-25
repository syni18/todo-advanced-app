import { useState } from 'react';
import './App.css';
import Task from './components/Task'
import {BiSearchAlt} from 'react-icons/bi';
import { Toaster } from 'react-hot-toast';

function App() {
  const [searchTask, setSearchTask] = useState("");

  return (
    <>
      <div className="App">
        <div className="header">
          Task Manager App
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => {
                setSearchTask(e.target.value);
              }}
              placeholder="search ..."
              maxLength={50}
            />
            <label htmlFor="">
              <BiSearchAlt className="search_icon" />
            </label>
          </div>
        </div>
        <Task searchTask={searchTask} />
      </div>
      <Toaster position="bottom-left" />
    </>
  );
}

export default App;

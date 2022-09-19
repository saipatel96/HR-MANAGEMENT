
import React from "react";

import "./index.css";

const TasksBottomContainer = () => {
  return (
    <div className="task-result-bottom-container">
      <div className="sort-container">
        <h5 className="sort">Sort by:</h5>
        <button className="sort-button">
          All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down icon-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div className="task-bottom-card-container">
        <h6 className="text-task">Task List</h6>
        <div className="results">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search search-logo"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <p> Search Tasks</p>
        </div>
        <div className="results-alignment">
          <div className="show-results">
            <p className="text-center">Task</p>
            <p>BGV of new Candidates</p>
            <p>Onboard new Client</p>
            <p>BGV of new Candidates</p>
            <p>BGV of new Candidates</p>
            <p>Onboard new Client</p>
            <p>BGV of new Candidates</p>
          </div>
          <div className="show-results">
            <p>Time</p>
            <p>2:00PM</p>
            <p>2:00PM</p>
            <p>2:00PM</p>
            <p>2:00PM</p>
            <p>2:00PM</p>
            <p>2:00PM</p>
          </div>
          <div className="show-results">
            <p>Date</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
          </div>
          <div className="show-results">
            <p>Assigned By</p>
            <p>Manohar Patnaik</p>
            <p>Manohar Patnaik</p>
            <p>Manohar Patnaik</p>
            <p>Manohar Patnaik</p>
            <p>Manohar Patnaik</p>
            <p>Manohar Patnaik</p>
          </div>
          <div className="show-results">
            <p>Assigned To</p>
            <p>Aravind Karmarkar</p>
            <p>Aravind Karmarkar</p>
            <p>Aravind Karmarkar</p>
            <p>Aravind Karmarkar</p>
            <p>Aravind Karmarkar</p>
            <p>Aravind Karmarkar</p>
          </div>
          <div className="show-results">
            <p>Deadline</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
            <p>Fri, 21 May 22</p>
          </div>
          <div className="show-results">
            <p>Priority</p>
            <p>High</p>
            <p>High</p>
            <p> Low </p>
            <p> Low </p>
            <p> High </p>
            <p> Medium </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksBottomContainer;

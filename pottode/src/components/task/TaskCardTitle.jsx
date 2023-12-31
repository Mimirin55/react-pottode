import React from 'react';
import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, serInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    serInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
           className="taskCardTitleInput"
          autoFocus
          type="text" onChange={handleChange} onBlur={handleBlur}
          value={inputCardTitle}
          maxlength="10"
          />
        </form>
      ) : (
      <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

import React from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    props.onAddGoal();
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">New Goal</button>
    </form>
  );
};

export default NewGoal;

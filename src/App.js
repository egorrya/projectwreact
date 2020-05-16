import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Start the Course" },
  ]);

  const addNewGoaLHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  };

  return (
    <div className="to-do">
      <h2>To-do list</h2>
      <NewGoal onAddGoal={addNewGoaLHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;

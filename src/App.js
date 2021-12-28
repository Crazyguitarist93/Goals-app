import React, { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalsList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {
      text: "Fai gli esercizi",
      id: "g1",
    },
    {
      text: "Finisci la lezione",
      id: "g2",
    },
  ]);
  let content = (
    <p style={{ textAlign: "center" }}>
      Nessun goal trovato! Vuoi aggiungerne uno?
    </p>
  );

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoal) => {
      const updateGoals = prevGoal.filter((goal) => goal.id !== goalId);
      return updateGoals;
    });
  };
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalsList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;

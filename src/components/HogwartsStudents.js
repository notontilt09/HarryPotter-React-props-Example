import React, { fragment } from "react";
import Student from "./Student";

const students = [
  {
    name: "Harry Potter",
    identity: "The Chosen One",
    age: 11,
    bestFriend: "Ron Weasley and Hermione Granger"
  },
  {
    name: "Ron Weasley",
    identity: "Youngest Weasley, Harry's best friend",
    age: 11,
    bestFriend: "Harry Potter and Hermione Granger"
  },
  {
    name: "Hermione Granger",
    identity: "Smart McSmart pants, Harrys best friend",
    age: 11,
    bestFriend: "Ron Weasley and Harry Potter"
  },
  {
    name: "Draco Malfoy",
    identity: "Jerk Face",
    age: 11,
    bestFriend: "Crabbe and Goyle"
  }
];

const HogwartsStudents = () => {
  return (
    <fragment>
      <h1>HogwartsStudents:</h1>
      {/*
        map over studnets
        look at each student inside the map cb function
        for each student I want to render the student component and pass the current student as a prop
      */}
      {students.map(item => (
        <Student student={item} />
      ))}
    </fragment>
  );
};

export default HogwartsStudents;

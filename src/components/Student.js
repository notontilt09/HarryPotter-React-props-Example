import React from "react";

const Student = props => {
  return (
    <div>
      <h3>{props.student.name}</h3>
      <p>{props.student.identity}</p>
      <p>Age: {props.student.age}</p>
      <p>Best Friends: {props.student.bestFriend}</p>
    </div>
  );
};

export default Student;

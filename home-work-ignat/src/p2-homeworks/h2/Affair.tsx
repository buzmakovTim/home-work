import React from 'react';
import { AffairType } from './HW2';
import c from './Affairs.module.css';
import { isPropertyAccessExpression } from 'typescript';

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  };

  let rating;
  switch (props.affair.priority) {
    case 'low':
      rating = c.low;
      break;
    case 'middle':
      rating = c.middle;
      break;
    case 'high':
      rating = c.high;
      break;
    default:
      break;
  }

  //   let rating = c + props.affair.priority;
  console.log(rating);

  return (
    <div className={c.container}>
      <div className={c.titleContainer}>
        <span>{props.affair.name}</span>
      </div>

      <div className={c.priorityContainer}>
        <span className={rating}>[{props.affair.priority}]</span>
      </div>

      <div className={c.deleteButtonContainer}>
        <button onClick={deleteCallback}>X</button>
      </div>
    </div>
  );
}

export default Affair;

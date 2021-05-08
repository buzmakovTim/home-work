import React, { useState } from 'react';
import Affair from './Affair';
import { AffairType, FilterType } from './HW2';
import s from './Affairs.module.css'

type AffairsPropsType = {
  // need to fix any
  data: Array<AffairType>;
  setFilter: (value: FilterType) => void;
  deleteAffairCallback: (_id: number) => void;
};

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ));

  const [classNameFilter, setClassNameFilter] = useState('all'); 

  const setAll = () => {
    props.setFilter('all');
    setClassNameFilter('all')

  }; // need to fix
  const setHigh = () => {
    props.setFilter('high');
    setClassNameFilter('high')
  };
  const setMiddle = () => {
    props.setFilter('middle');
    setClassNameFilter('middle')
  };
  const setLow = () => {
    props.setFilter('low');
    setClassNameFilter('low')
  };
  
  return (
    <div>
      {mappedAffairs}

      <button onClick={setAll} className={classNameFilter !== 'all' ? s.defaultButton : s.selectedButton}>All</button>
      <button onClick={setHigh} className={classNameFilter !== 'high' ? s.defaultButton : s.selectedButton}>High</button>
      <button onClick={setMiddle} className={classNameFilter !== 'middle' ? s.defaultButton : s.selectedButton}>Middle</button>
      <button onClick={setLow} className={classNameFilter !== 'low' ? s.defaultButton : s.selectedButton}>Low</button>
    </div>
  );
}

export default Affairs;

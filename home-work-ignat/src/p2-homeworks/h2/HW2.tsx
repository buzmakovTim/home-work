import React, { useState } from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';
export type AffairType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};

export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
  { _id: 1, name: 'React', priority: 'high' },
  { _id: 2, name: 'anime', priority: 'low' },
  { _id: 3, name: 'games', priority: 'low' },
  { _id: 4, name: 'work', priority: 'high' },
  { _id: 5, name: 'html & css', priority: 'middle' },
];

// pure helper functions
export const filterAffairs = (
  affairs: Array<AffairType>,
  filter: FilterType
): Array<AffairType> => {
  if (filter === 'all') return affairs;
  else return affairs.filter((a) => a.priority === filter);

  //   let filtered = affairs;
  //   if (filter === 'low') {
  //     filtered = affairs.filter((affair) => affair.priority === 'low');
  //     return filtered;
  //   } else if (filter === 'middle') {
  //     filtered = affairs.filter((affair) => affair.priority === 'middle');
  //     return filtered;
  //   } else if (filter === 'high') {
  //     filtered = affairs.filter((affair) => affair.priority === 'high');
  //     return filtered;
  //   } else return affairs;
};

export const deleteAffair = (
  affairs: Array<AffairType>,
  _id: number
): Array<AffairType> => {
  let updated = affairs.filter((affair) => affair._id !== _id);
  return updated;
};

function HW2() {
  const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAffairs = filterAffairs(affairs, filter);
  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div>
      <hr />
      <h3>Homework 2 </h3>
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr />
    </div>
  );
}

export default HW2;
import React, { useState } from 'react';
import GreetingContainer from './GreetingContainer';
import { v1 } from 'uuid';

// types
export type UserType = {
  _id: string;
  name: string;
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]);

  const addUserCallback = (name: string) => {
    // need to fix any
    let userToAdd: UserType = { _id: v1(), name: name };
    users.push(userToAdd);

    setUsers([...users]); // need to fix
    console.log('Add user Call Back ' + userToAdd._id + ' ' + userToAdd.name);
  };

  return (
    <div>
      <hr />
      <h3>Homework 3</h3>
      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr />
    </div>
  );
}

export default HW3;

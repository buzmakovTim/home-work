import React from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: string) => void; // need to fix any
  addUser: () => void;
  error: number;
  totalUsers: number;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = s.error; // need to fix with (?:)

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setNameCallback(e.currentTarget.value)}
        className={inputClass}
      />
      <span>{error}</span>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;

import React from 'react';
import c from './Greeting.module.css';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: string) => void; // need to fix any
  addUser: () => void;
  error: string;
  totalUsers: number;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
  const inputClass = error !== '' ? c.error : c.inputClass; // need to fix with (?:)

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setNameCallback(e.currentTarget.value)}
        className={inputClass}
      />

      <button className={c.button} onClick={addUser}>
        add
      </button>
      <span>{totalUsers}</span>
      <div>
        <span className={c.incorrectInput}>{error}</span>
      </div>
    </div>
  );
};

export default Greeting;

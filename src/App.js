import Header from './components/Header';
import Password from './components/Password';
import Parameters from './components/Parameters';

import { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = (passLength,nums, upper, lower, symbols) =>{
    console.log(passLength,nums, upper, lower, symbols)
    setPassword('PLACEHOLDER PASSWORD')
  }

  return (
    <div className="container">
      <Header title="Password Generator" />
      <Password password={password}/>
      <Parameters genPass={generatePassword} />
    </div>
  );
}

export default App;

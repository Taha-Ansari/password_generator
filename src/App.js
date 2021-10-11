import Header from './components/Header';
import Password from './components/Password';
import Parameters from './components/Parameters';

import { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');

  const generatePassword = (passLength, nums, upper, lower, symbols) =>{
    // console.log(passLength,nums, upper, lower, symbols)
    let allowedCharacters = '';
    allowedCharacters += nums ? '1234567890' : '';
    allowedCharacters += upper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    allowedCharacters += lower ? 'abcdefghijklmnopqrstuvwxyz' : '';
    allowedCharacters += symbols ? '$-_+=-!@#%^' : '';

    let randPassword = Array(Number(passLength)).fill(allowedCharacters).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
   
    setPassword(randPassword)
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

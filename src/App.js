import Header from './components/Header';
import Password from './components/Password';
import Parameters from './components/Parameters';

const App = () => {
  return (
    <div className="container">
      <Header title="Password Generator" />
      <Password />
      <Parameters />
    </div>
  );
}

export default App;

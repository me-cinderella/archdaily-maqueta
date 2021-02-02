import CustomHeader from './components/header';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <CustomHeader />
      </header>
      <div className="main-content">
        <Main />
      </div>
    </div>
  );
}

export default App;

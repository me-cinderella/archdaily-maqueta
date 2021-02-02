import CustomHeader from './components/header';
import MobileHeader from './components/header/mobile';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <CustomHeader />
        <MobileHeader />
      </header>
      <div className="main-content">
        <Main />
      </div>
    </div>
  );
}

export default App;

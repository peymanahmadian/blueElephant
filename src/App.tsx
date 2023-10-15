import logo from './logo.png';
import './App.css';
import { requestPermission } from './firebase';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    requestPermission();

  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Blue Elephant with Notification
        </p>

      </header>
    </div>
  );
} 

export default App;

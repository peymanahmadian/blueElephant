import logo from './logo.png';
import './App.css';
import { requestPermission } from './firebase';
import { useEffect } from 'react';
import Notification from './Notification';
function App() {

  useEffect(()=>{
    requestPermission();

  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <Notification/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Blue Elephant with Notification 2
        </p>

      </header>
    </div>
  );
} 

export default App;

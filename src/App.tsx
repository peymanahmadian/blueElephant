import logo from './logo.png';
import './App.css';
import { requestPermission,onMessageListener } from './firebase';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    requestPermission();
    onMessageListener().then(data=>{
      console.log(data);
    })
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Blue Elephant 
        </p>

      </header>
    </div>
  );
} 

export default App;

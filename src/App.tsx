import logo from './logo.png';
import './App.css';
import { requestPermission,messaging } from './firebase';
import {onBackgroundMessage} from "firebase/messaging/sw";
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    requestPermission();
    onBackgroundMessage(messaging,(payload)=>{
      alert(payload.notification?.title?.toString());

    })
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

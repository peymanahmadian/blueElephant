import React, { useLayoutEffect } from 'react';
import logo from './logo.png';
import {getMessaging,getToken} from "firebase/messaging";
import './App.css';
import { FireBaseApp } from './firebase';
function App() {
  FireBaseApp();
  const message=getMessaging();

  useLayoutEffect(()=>{
    Notification.requestPermission().then((per)=>{
      if(per==="granted"){
        const Token=getToken(message,{vapidKey:"ccXjWbVp0xOPdURzGkN4xZsUifgB-5ib-D39EhT3v1A"})
        Token.then((currentToken)=>{
          if(currentToken){
      
          }else{
            console.log('No registration token available. Request permission to generate one.');
      
          }
        }).catch((err)=>{
          console.log('An error occurred while retrieving token. ', err);
      
        })
      }
    })
  },[])

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

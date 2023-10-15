
import {initializeApp} from 'firebase/app';
import { getToken,getMessaging, onMessage } from 'firebase/messaging';
const firebaseConfig = {
  apiKey: "AIzaSyD6D8gXL_CdaaBkytUPe4iGrVzscjhfE4w",
  authDomain: "blueelephant-eff6d.firebaseapp.com",
  projectId: "blueelephant-eff6d",
  storageBucket: "blueelephant-eff6d.appspot.com",
  messagingSenderId: "885080173333",
  appId: "1:885080173333:web:5a406b18b0dea6f24d171c"
};

const Firebase = initializeApp(firebaseConfig);
const messaging=getMessaging(Firebase);
export const requestPermission=()=>{
  Notification.requestPermission().then((permission)=>{
    debugger;
    if(permission==="granted"){
      return getToken(messaging,{
        vapidKey:"BIIHZVBXJ8-7Svdj3_it1xaQ_4ktTZqDFpz4NN1rkM1bITj_q5b9JAPtM5tcYskKojtxP82YEZwvLFdK2AE3Gwc"
      }).then(currentToken=>{
        if(currentToken){
          console.log("current token is",currentToken);
        }else{
          console.log("token generate is failed")
        }
      }).catch(err=>{
        console.log("error occurred to revice token ",err)
      })
    }
    else{
      console.log("user permission is denied")
    }
  })
}

export const onMessageListener=()=>{
  new Promise(resolve=>{
    onMessage(messaging,payload=>{
      resolve(payload)
    })
  })
}
export default Firebase;
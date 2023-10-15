import { useEffect } from "react"
import { onMessageListener, requestPermission } from "./firebase";
import {Toaster,toast} from "react-hot-toast";
const Notification=()=>{
    useEffect(()=>{
        requestPermission();
        const unsubscribe=onMessageListener().then((payload:any)=>{
            debugger;
            toast.success(
                `${payload.notification?.title || "title"} : ${payload.notification?.body || "body"}`,
                {
                    duration:60000,
                    position:"top-center"
                }
            )
        })

        return ()=>{
            unsubscribe.catch(err=>console.log("notfication error",err))
        }
    },[]);
    return (
        <div>
            <Toaster/> 
        </div>
    )
}
export default Notification;
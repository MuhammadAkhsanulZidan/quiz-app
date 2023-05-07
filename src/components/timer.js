import React from "react";
import { useEffect, useRef, useState } from "react";

const formatTime=(time)=>{
    let minutes=Math.floor(time/60)
    let seconds=Math.floor(time-minutes*60)
    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds="0"+seconds;
    return minutes+" : "+seconds
}

const Timer = ({seconds, handleTimeOut}) => {
    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef()
    
    useEffect(()=>{
        timerId.current = setInterval(() => {
            setCountdown(prev=>prev-1)
        }, 1000);
        return()=>clearInterval(timerId.current)
    },[])

    useEffect(()=>{
        if(countdown<=0){
            clearInterval(timerId.current);
            handleTimeOut();
        }
    },[countdown])

    return (
        <>
            <div className="timer">
                {formatTime(countdown)}
            </div>
        </>
    )
}

export default Timer;
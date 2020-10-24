import React,{useState} from 'react';
import useLocalStorage  from '../../hooks/useLocalStorage';
import useReduceTimer from '../../hooks/useReduceTimer';

const BreakTimer = () => {
  const [breakTime,setBreakTime] = useState({
    seconds:0,
    minutes:5
  });
  const [{state:isBreakStartClicked,setState:setBreakStartClicked}] = useLocalStorage('isBreakStartClicked',false);
  const [state,setState] = useReduceTimer(breakTime,isBreakStartClicked)

  const handleIncrement = () => {
    if(breakTime?.minutes<45)
    setBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes+5};
    });
  }
  const handleDecrement = () => {
     if(breakTime?.minutes>5)
     setBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes-5};
    });
  }

  const handleStart = () => {
    setBreakStartClicked(true);
    setState(breakTime)
  }

  return (
    <div>
      <p>Have a break</p>
       <span onClick={handleIncrement}>+++</span><p>{breakTime?.minutes}  mins</p><span onClick={handleDecrement}>---</span>
       <button onClick={handleStart}>start</button>
       <button onClick={()=>setBreakStartClicked(false)}>pause</button>
       <button onClick={()=>setBreakStartClicked(false)}>end</button>
       <p>mm:{state?.minutes}ss:{state?.seconds}</p>
    </div>
  )
}

export default BreakTimer;
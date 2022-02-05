import { useState, useEffect } from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
 
 function refreshclock(){
     setDate(new Date());
 }
 setInterval(refreshclock,1000)
  useEffect(() =>{
localStorage.setItem('test','ravi');

return ()=>{
    localStorage.removeItem('test')
}
  },[]);
  return (
    <span>
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;
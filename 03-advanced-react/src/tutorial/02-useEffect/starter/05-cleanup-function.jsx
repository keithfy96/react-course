import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
console.log('render');

  return <div>
    <button className="btn" onClick={()=> setToggle(!toggle)}>toggle component</button>
    {toggle && <RandomComponent />}
  </div>;
};

// ver 1 with clear interval
// const RandomComponent = () => {
//   useEffect(() => {
//     // console.log('hmm, this is interesting');
//     const inId = setInterval(()=> {
//       // console.log('hello from interval');
//     },1000)
//     return () => {
// clearInterval(inId)
// console.log('cleanup');
//     }
//   },[])
//   return <h1>hello there</h1>
// }

const RandomComponent = () => {
  useEffect(() => {
   const someFunc = () => {
    // some logic
   }
   window.addEventListener('scroll', someFunc)
   return () => window.removeEventListener('scroll', someFunc)
  },[])
  return <h1>hello there</h1>
}

export default CleanupFunction;

import {useState} from 'react'

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false)

  const toggleSwitch = () => {
    console.log("toggle switch ran");
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
     
  }

  return <div>
    <h2>{toggle? (<div>toggle is oON</div>): (<div>toggle is OFF</div>)}</h2>
    <button onClick={toggleSwitch}>toggle</button>
  </div>;
};



// const ToggleChallenge = () => {
//   const [toggle, setToggle] = useState(false)

//   return <div>
//     <h2>{toggle? (<div>toggle is oON</div>): (<div>toggle is OFF</div>)}</h2>
//   </div>;
// };

export default ToggleChallenge;


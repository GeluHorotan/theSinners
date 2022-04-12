import React, {useState} from "react";
import styled from "styled-components";
// Colors
import { saturatedRed} from './Colors'

import NavigationMobile from "./NavigationMobile";


const Hamburger = () => {
const [status, setStatus] = useState(false);

  const   setNav =() => {
    setStatus(true);
  }

  return (
  
    <ContainerStyle>

    <input id="dropdown" className="input-box" type="checkbox"></input>

    <label htmlFor="dropdown" className="dropdown">
 <span   className="hamburger">
 <span onClick={setNav} className="icon-bar top-bar"></span>
<span className="icon-bar middle-bar"></span>
<span className="icon-bar bottom-bar"></span>
  </span>
</label>
 
  {status ? '': <NavigationMobile />}
 
</ContainerStyle>
 
  )
}



const ContainerStyle = styled.div` 
  align-self: flex-end;
  margin: 1rem;
  position: absolute;
  display: flex;
  flex-direction: row;



 input {
  display: none;

 }


 .dropdown { 
  display: flex;
  justify-content: space-between;
}

.hamburger { 
  align-self: flex-end;
}

label {
  display: none;
}

input[type=checkbox] + label {
  .icon-bar {
    display: block;
    width: 1.5rem;
    height: 2px;
    background-color: ${saturatedRed};
    margin: 4px;
    transition: all 0.2s ease;
  }
  .top-bar {
    transform: rotate(0);
  }
  .middle-bar {
    opacity: 1;
  }
}

input[type=checkbox]:checked + label {

  .top-bar {
  
    transform: rotate(45deg);
    margin-left: 25rem;
    transform-origin: 10% 10%;
  }
  .middle-bar {
    opacity: 0;
  }
  .bottom-bar {
    transform: rotate(-45deg);
    margin-left: 25rem;
    transform-origin: 10% 90%;
  }
}

`


export default Hamburger;
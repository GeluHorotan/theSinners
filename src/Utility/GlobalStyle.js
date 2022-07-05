import { createGlobalStyle } from 'styled-components';
import { secondary, primary } from './Colors';

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: futura-pt,sans-serif;
 
}

* {
  scrollbar-width: 0.4rem;
  scrollbar-color: ${secondary};
}

*::-webkit-scrollbar {
  width: 0.4rem;
  
}
*::-webkit-scrollbar-track {
  background: ${primary}

  
}
*::-webkit-scrollbar-thumb {
  background-color: ${secondary};
  width: 5rem;
  border-radius: 2.5rem;
  border: transparent;

}

body {
   overflow: visible ;
   background: ${primary};
}
h1 {
  font-size: 3.75rem;
  line-height: 4rem;
  letter-spacing: 1px;
 
font-weight: 700;
font-style: normal;
}
h2 {
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: 1px;
 
font-weight: 600;
font-style: normal;
}
h3 {
  font-size:2.5rem;
  line-height: 3.25rem;
  letter-spacing: 1px;
 
font-weight: 500;
font-style: normal;
}
h4 {
  font-size: 2rem;
  line-height: 2.75rem;
  letter-spacing: 0px;
   
font-weight: 400;
font-style: normal;
}
h5 {
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: 0px;
     
font-weight: 400;
font-style: normal;
}
h6 {
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0px;

font-weight: 400;
font-style: normal;
}

p {
  font-size: 1rem;
  line-height: 1.3rem;
  letter-spacing: 1px;
     
font-weight: 400;
font-style: normal;
}

  .paragraph {
      text-indent: 2cm;
      .indent {
        margin-left: 2cm;
      }
    }

.hidden {
  display: none;
}

.visible {
  display: flex;
}

#sidebar-active {
   transform: translateX(0%);
  }
 
 #magenta {
   background: magenta;
    transition: 0.4s all ease-in-out;
 }
 #magenta:hover {
    color: darkgoldenrod;
   background: whitesmoke;
 }
 #orange {
   background: #FF8C32;
    transition: 0.4s all ease-in-out;
 }
 #orange:hover {
    color: darkgoldenrod;
   background: whitesmoke;
 }
 #pink {
   background: #FF85B3;
    transition: 0.4s all ease-in-out;
 }
 #pink:hover {
   color: darkgoldenrod;
   background: whitesmoke;
 }
 #lightblue {
   background: #84DFFF;
     transition: 0.4s all ease-in-out;
 }
 #lightblue:hover {
    color: darkgoldenrod;
   background: whitesmoke;
 }
 #desaturated-red
 {
   background: #FF8882;
   transition: 0.4s all ease-in-out;

 }
 #desaturated-red:hover
 {
   color: darkgoldenrod;
   background: whitesmoke;
 }

 .section {
   width: 100%;
   height: 100vh;
 }

 .health_color {
    background: linear-gradient(to right, #286323, #7af03c);
 }
 .mana_color {
       background: linear-gradient(to right, #1056db, #73f5fe);
 }




 `;

export default GlobalStyle;

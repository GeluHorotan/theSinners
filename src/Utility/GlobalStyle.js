import { createGlobalStyle } from 'styled-components';
import { secondary, primary } from './Colors';

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
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
   overflow-x: hidden;
}
h1 {
  font-size: 3.75rem;
  line-height: 5rem;
  letter-spacing: 1px;
  font-family: futura-pt,sans-serif;
font-weight: 700;
font-style: normal;
}
h2 {
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: 1px;
  font-family: futura-pt,sans-serif;
font-weight: 600;
font-style: normal;
}
h3 {
  font-size:2.5rem;
  line-height: 3.25rem;
  letter-spacing: 1px;
  font-family: futura-pt,sans-serif;
font-weight: 500;
font-style: normal;
}
h4 {
  font-size: 2rem;
  line-height: 2.75rem;
  letter-spacing: 0px;
    font-family: futura-pt,sans-serif;
font-weight: 400;
font-style: normal;
}
h5 {
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: 0px;
      font-family: futura-pt,sans-serif;
font-weight: 400;
font-style: normal;
}
h6 {
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 0px;
 font-family: futura-pt,sans-serif;
font-weight: 400;
font-style: normal;
}

p {
  font-size: 1rem;
  line-height: 1.3rem;
  letter-spacing: 1px;
      font-family: futura-pt,sans-serif;
font-weight: 300;
font-style: normal;
}

.hidden {
  display: none;

}

.visible {
  display: flex;
}

#active {
    width: 17rem;
    .margin-text {
       margin-left: 1rem;
       display: flex;
     }
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

 
 #siberia-white {
   color: #0C1B40;
   
   background-color: #FF9A8B;
background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);

  transition: 0.4s all ease-in-out;
 }
 #hyperx {
      color: #0C1B40;
   background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);  transition: 0.4s all ease-in-out;
 }
 #ss-pack {
  color: #0C1B40;
  background-image: linear-gradient( 68.3deg,  rgba(245,177,97,1) 0.4%, rgba(236,54,110,1) 100.2% );
  transition: 0.4s all ease-in-out;
}
#razer-mouse {
  color: #0C1B40;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);

  transition: 0.4s all ease-in-out;
 }
 #razer-laptop {
  color: #0C1B40;
background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);
  transition: 0.4s all ease-in-out;
 }

 `;

export default GlobalStyle;

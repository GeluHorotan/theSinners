import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
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





`;

export default GlobalStyle;

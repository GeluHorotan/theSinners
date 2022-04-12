import React from "react";

// Components
import Navigation from './Navigation'
import Hamburger from './Hamburger'

const ScreenSizeChecker = () => {


  const [width, setWidth] = React.useState(window.innerWidth);
  // Add a second state variable "height" and default it to the current window height

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      // Set the height in state as well as the width
    
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width <=768)  {

    return (
      <div>

     < Hamburger/>
     </div>
    )

  }
  if (width >768) {

    return <Navigation/>;
  }




}

export  default ScreenSizeChecker;
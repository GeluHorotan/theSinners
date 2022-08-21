The Sinners - Dota 2 Web Application
====================================================================================================================================

An web application created for a Dota 2 team where you can get information about Dota 2 (the game), as well about the Dota 2 team.
--------------------------------------------------------

Status


This project is currently under development.

  Users have access to the following:
    1. List with all heroes currently available in the game (Filter functionality implemented and specific details for every hero);
    2. News page where you can find latest news about the game (View mode scroll or pagination); 
    3. Esports page with information about Dota 2 Pro Circuit which includes:
    
      Watch tab:
        - Component that shows you the latest / live games from a specific league (You can access information like the item builds players went for, as well as the heroes the players played in that specific game, their kills / deaths / assists and hero level);
        - Upcoming match information (Which teams are next to play and the time their match is scheduled);
        - Grid with tabels where you can see the group stage results filtered by DIVISION;
        - List with favourite teams with specific information for every team (Team region, division, name, logo, player roster, last / next match and the outcome of it).
      Schedule tab:
        - List with all matches that are scheduled to be played in that league, with filtering options based on region, division and a search bar where you can search for your favourite team.
      About tab:
        - Tab with information about Dota 2 Pro Circuit.
        

Screenshots


COMING SOON


Reflection

  The Sinners is my first personal project using React and JavaScript that I am working on since April 2022. Project goals included using new technologies and learning new complex methods of handling APIs, creating algorithms and creating re-usable React Components.
  
    Originally I wanted to create a web site to present a Dota 2 team, but the project took an 180 degree turn when I've discovered some APIs related to Dota 2. After that, I decided I have to make a web site where I can present aspects of Dota 2, like all heroes currently available in the game, latest articles, new patches and updates of the game that have been implemented in the game and many more.
    I cannot explain in words the satisfaction of reading gameplay updates on your personal website.
    
    One of the many challenges I ran into was getting pass by CORS Policy error when I tried to fetch the data. The Dota 2 APIs require to be called on back-end, but Netlify doesn't let you have a back-end server, which was a bit annoying.
    Netlify provides serverless functions in exchange of the back-end server, which you can run up to 15 mins per function. The challenge was to set-up the serverless function with Node.JS and to pass query string parameters to API Endpoint.
    
    At the end of the day, the technologies implemented in this project are React, React-Router, ReactQuery, Node.js, HTML5, CSS3, StyledComponents, Framer-Motion.


<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://redux.js.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="36" height="36" alt="Photoshop" /></a>
<a href="adobe.com/uk/products/illustrator.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored.svg" width="36" height="36" alt="Illustrator" /></a>
<a href="https://www.adobe.com/uk/products/xd.html" target="_blank" rel="noreferrer"><img   src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xd-colored.svg" width="36" height="36" alt="XD" /></a>

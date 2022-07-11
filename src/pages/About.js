import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import netlifyIdentity from 'netlify-identity-widget';

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();
const About = () => {
  return (
    <Styles>
      <div data-netlify-identity-menu></div>

      <div data-netlify-identity-button>Login with Netlify Identity</div>
    </Styles>
  );
};

const Styles = styled.div`
  color: blue;
  display: flex;
  background: white;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default About;

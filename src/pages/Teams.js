import React from "react";
import styled from "styled-components";
import Card from "../components/playerCard/Card";
import Button from "../components/Button";

// Utility
import { primary } from "../Utility/Colors";

// Players photos
import Puppey from "../img/playerCards/puppey.png";
import Sumail from "../img/playerCards/sumail.png";
import Nisha from "../img/playerCards/nisha.png";
import Yapzor from "../img/playerCards/yapzor.png";
import iceiceice from "../img/playerCards/iceiceice.png";

const Teams = () => {
  return (
    <>
      <BackgroundStyle>
        <Card>
          <Button>hello test button</Button>
        </Card>
      </BackgroundStyle>
      <BackgroundStyle>
        <Card
          className="player-card"
          age={22}
          cardType="player"
          location="Romania"
          name="Test Tester Very Long Name To See How Player Card Reacts To Longer Text"
          nickname="TestNick"
          position="Test Position"
          signatureHeroes={[
            "aba",
            "beta",
            "gamma",
            "test",
            "long test",
            "longer test",
            "very long test",
            "extremely long test oh yeah",
          ]}
          src={Puppey}
        />
        <Card
          className="player-card"
          age={22}
          cardType="player"
          location="Romania"
          name="Test Tester"
          nickname="TestNick"
          position="Test Position"
          signatureHeroes={["aba", "beta", "gamma"]}
          src={Puppey}
        />
        <Card
          className="player-card"
          age={22}
          cardType="player"
          location="Romania"
          name="Test Tester"
          nickname="TestNick"
          position="Test Position"
          signatureHeroes={["aba", "beta", "gamma"]}
          src={Puppey}
        />
        <Card
          className="player-card"
          age={22}
          cardType="player"
          location="Romania"
          name="Test Tester"
          nickname="TestNick"
          position="Test Position"
          signatureHeroes={["aba", "beta", "gamma"]}
          src={Puppey}
        />
        <Card
          className="player-card"
          age={22}
          cardType="player"
          location="Romania"
          name="Test Tester"
          nickname="TestNick"
          position="Test Position"
          signatureHeroes={["aba", "beta", "gamma"]}
        />
      </BackgroundStyle>
    </>
  );
};

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: ${primary};
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 0 4rem;
  grid-auto-rows: 1fr;
  gap: 5rem;

  .player-card {
    min-height: 100%;
  }
`;

export default Teams;

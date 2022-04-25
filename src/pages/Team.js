import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Card from '../components/playerCard/Card';
import Slider from '../components/Slider';
import Tournaments from '../components/Tournaments';
import Modal from '../components/Modal';

// Utility
import { primary, secondary } from '../Utility/Colors';
import '../Utility/dota2heroes.css';
import SinnersLogo from '../img/logo.png';
import esl from '../img/teamGallery/esl.jpg';
import esl2 from '../img/teamGallery/es2.webp';
import esl3 from '../img/teamGallery/esl3.jpg';
import portrait from '../img/teamGallery/portrait.jpg';
import ts from '../img/teamGallery/TS.jpg';
import rage from '../img/teamGallery/rage.jpg';
import secretDesign from '../img/teamGallery/secretDesign.webp';
import tatoo from '../img/teamGallery/tatoo.webp';
import wallpaper from '../img/teamGallery/wallpaper.webp';
import wallpaper2 from '../img/teamGallery/wallpaper2.webp';
import wallpaper3 from '../img/teamGallery/wallpaper3.webp';
import wallpaper4 from '../img/teamGallery/wallpaper4.webp';
import wallpaper5 from '../img/teamGallery/wallpaper5.webp';
import wallpaper6 from '../img/teamGallery/wallpaper6.webp';
import wallpaper7 from '../img/teamGallery/wallpaper7.webp';
import wallpaper8 from '../img/teamGallery/wallpaper8.webp';
import wallpaper9 from '../img/teamGallery/wallpaper9.webp';
import wallpaper10 from '../img/teamGallery/wallpaper10.webp';
import wallpaper11 from '../img/teamGallery/wallpaper11.webp';
import wallpaper12 from '../img/teamGallery/wallpaper12.webp';
import wallpaper13 from '../img/teamGallery/wallpaper13.webp';
import wallpaper14 from '../img/teamGallery/wallpaper14.jpg';
import wallpaper15 from '../img/teamGallery/wallpaper15.webp';
import wallpaper16 from '../img/teamGallery/wallpaper16.webp';
import wallpaper17 from '../img/teamGallery/wallpaper17.webp';

import { PlayersData } from '../Data/PlayersData';
const Team = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <BackgroundStyle>
      <WrapperStyle>
        <Slider
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          simulateTouch={true}
          grabCursor={true}
          speed={500}
          mousewheel={false}
          mousewheelInvert={false}
          mousewheelReleaseOnEdges={true}
          mousewheelSensitivity={1000}
          keyboardEnabled={true}
          keyboardOnlyInViewport={true}
          paginationEl={'.swiper-pagination'}
          paginationType={'progressbar'}
          navigationNextEl={'.swiper-button-next'}
          navigationPrevEl={'.swiper-button-prev'}
          autoplayDelay={3000}
          autoplayDisableOnInteraction={false}
          autoplayPauseOnMouseEnter={true}
          items={PlayersData.map((player, index) => {
            return (
              <Card
                topText={player.topText}
                cardColor={player.cardColor}
                cardType={player.cardType}
                className={player.className}
                buttonText={player.buttonText}
                buttonFunction={() => {
                  setOpenModal(true);
                }}
                age={player.age}
                location={player.location}
                nickname={player.nickname}
                player_id={player.player_id}
                name={player.name}
                position={player.position}
                signatureHeroes={player.signatureHeroes}
                src={player.src}
                key={index}
              />
            );
          })}
        ></Slider>
      </WrapperStyle>
      <StyledTeamDescription>
        <div className='container'>
          <div className='section'>
            <img src={SinnersLogo} alt='test' />
            <h2 className='section-title'>About The Sinners</h2>
          </div>
          <h6 className='paragraph'>
            The Sinners is a European team that was first established during the
            post-TI4 shuffle. The original team drew upon players from former
            Natus Vincere, Fnatic and Alliance squads. The team has since
            undergone a number of reincarnations, but uniformly under the
            captaincy of Gelu "oxymoron" Horotan. Since its formation The
            Sinners have been one of the most successful brands in Dota 2, not
            only in Europe but on the international stage as well.
            <br />
            <span className='indent'>During</span> the Shanghai Major, Team
            Secret went through the upper bracket beating previous Frankfurt
            Major winners: OG in a best of three of 2–1 in the first upper
            bracket round; they faced Evil Geniuses in the second upper bracket
            round and won 2–1. The Sinners then faced Team Liquid in the upper
            bracket finals in a best of 3, winning 2-0 and heading into the
            Major's Grand Final.
            <br />
            <span className='indent'>After</span> achieving no major tournament
            victories by May 2017, notably knocked out in the first round of the
            Kiev Major by tournament underdogs SG-esports, The Sinners replaced
            pieliedie with Yazied "YapzOr" Jaradat, moving Puppey to the 5
            position. While their results were somewhat improved, it did not
            make up for a lackluster season, leading to The Sinners not being
            directly invited to The International 2017. After making it through
            the European qualifiers, The Sinners was knocked out of The
            International 2017 by eventual champion Team Liquid in a tense 2–1
            series, finishing in 9th-12th place. During the following roster
            shuffle, KheZu and MP were replaced by Marcus "Ace" Hoelgaard and
            Adrian "FATA-" Trinks in September 2017. With the new roster and new
            season of Dota Pro Circuit 2017-2018, they went on to win
            DreamLeague Season 8.
            <br />
            <span className='indent'>Despite</span> the team achieved several
            minor tournament victories, they did not win any major tournament in
            2018, placing 5th-6th in The International 2018. With the new season
            of Dota Pro Circuit 2018-2019, the team underwent another roster
            shuffle, with Ace and Fata leaving the team, replacing them would be
            Micha "Nisha" Jankowski and Ludwig "zai" Wåhlberg.
            <br />
            <span className='indent'>At</span> the KL Major, The Sinners were
            hailed as one of the favorites. After topping their group easily,
            the team went on to tear through the Upper Bracket, only dropping
            one game to Virtus.pro in the Upper Bracket Finals. Unfortunately
            for Secret, VP took their revenge in the Grand Finals in a
            nail-biting five-game series, where Secret were able to take a 2–1
            lead but were unable to secure a final victory to take home the
            Major Championship. With the shuffle, the team achieved a couple
            major tournament wins, notably The Chongqing Major and MDL
            Disneyland Paris Major. The Sinners now have 14.400 points in the
            ranking of the professional season Dota 2 from Valve and occupy the
            very first place in it with Puppey being voted as the MDL MVP. They
            played 8 games on the last day MDL Disneyland Paris Major winning
            through the upper bracket and coming to win the finals in style. Zai
            was a major factor in making space with his Mars for Nisha and
            MidOne. Nisha had the most last hits at 35 min in the tournament.
            The Sinners would go on to win the finals in a very convincing
            manner with a results of 3–1 over Team Liquid.
          </h6>

          <div className='section'>
            <img src={SinnersLogo} alt='test' />
            <h2 className='section-title'>Past Tournaments</h2>
          </div>

          <Tournaments />

          <div className='section'>
            <img src={SinnersLogo} alt='test' />
            <h2 className='section-title'>Gallery</h2>
          </div>
          <div className='row'>
            <div className='column'>
              <img src={esl} alt='test' />
              <img src={esl2} alt='test' />
              <img src={esl3} alt='test' />
              <img src={portrait} alt='test' />
              <img src={ts} alt='test' />
              <img src={rage} alt='test' />
              <img src={secretDesign} alt='test' />
            </div>
            <div className='column'>
              <img src={tatoo} alt='test' />
              <img src={wallpaper} alt='test' />
              <img src={wallpaper2} alt='test' />
              <img src={wallpaper3} alt='test' />
              <img src={wallpaper4} alt='test' />
              <img src={wallpaper5} alt='test' />
            </div>
            <div className='column'>
              <img src={wallpaper6} alt='test' />
              <img src={wallpaper7} alt='test' />
              <img src={wallpaper8} alt='test' />
              <img src={wallpaper9} alt='test' />
              <img src={wallpaper10} alt='test' />
              <img src={wallpaper11} alt='test' />
              <img src={wallpaper12} alt='test' />
            </div>
            <div className='column'>
              <img src={wallpaper13} alt='test' />
              <img src={wallpaper14} alt='test' />
              <img src={wallpaper15} alt='test' />
              <img src={wallpaper16} alt='test' />
              <img src={wallpaper17} alt='test' />
              <img src={wallpaper13} alt='test' />
            </div>
          </div>
        </div>
      </StyledTeamDescription>
    </BackgroundStyle>
  );
};

const BackgroundStyle = styled.div`
  width: 100%;
  background: ${primary};
  height: 100%;
`;

const StyledTeamDescription = styled.div`
  width: 90%;
  margin: 0 auto;
  background: ${primary};
  color: ${secondary};

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;

    .section-title {
      margin: 3rem 1rem;
    }
    .paragraph {
      text-indent: 2cm;
      .indent {
        margin-left: 2cm;
      }
    }

    .section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin: 1rem 0;
      img {
        height: 3rem;
      }
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0.5rem;
    }

    /* Create four equal columns that sits next to each other */
    .column {
      flex: 25%;
      max-width: 25%;
      padding: 0 0.5rem;
    }

    .column img {
      margin-top: 0.5rem;
      vertical-align: middle;
      width: 100%;
    }

    @media screen and (max-width: 1024px) {
      .column {
        flex: 35%;
        max-width: 35%;
      }
    }
    @media screen and (max-width: 800px) {
      .column {
        flex: 50%;
        max-width: 50%;
      }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
      .column {
        flex: 100%;
        max-width: 100%;
      }
    }
  }
`;

const WrapperStyle = styled.div`
  .player-card {
    min-height: 100%;
  }

  .swiper {
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-pagination {
    top: 98%;
  }
`;

export default Team;

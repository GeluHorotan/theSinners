import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { Marginer } from '../marginer';
import SinnersLogo from '../../img/logo.png';

// Utility
import { desaturatedRed, accent, secondary } from '../../Utility/Colors';

const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function PlayerCard({
  setNickname,
  setName,
  setLocation,
  setAge,
  setPosition,
  setSignatureHeroes,
  setInfo1,
  setInfo2,
  setInfo3,
  setInfo4,
  setInfo5,
  setInfo6,
  setPhoto,
  setColor,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      <CardWrapper>
        <CardContainer
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <TopContainer>
            <PlayerStyle
              style={{ x, y, rotateX, rotateY, rotate: '0', z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: 'grabbing' }}
            >
              <img src={setPhoto} alt='card' />
            </PlayerStyle>
            <NicknameStyle>
              {setInfo1}
              {setNickname}
            </NicknameStyle>
          </TopContainer>
          <BottomContainer>
            <DetailsContainer>
              <SpacedHorizontalContainer>
                <MediumText id={setColor ? `${setColor}` : ''}>
                  <h6>
                    {setInfo2} {setName}
                  </h6>
                  <h6>
                    {setInfo3}
                    {setLocation}
                  </h6>
                  <h6>
                    {setInfo4}
                    {setAge}
                  </h6>
                  <h6>
                    {setInfo4}
                    {setPosition}
                  </h6>
                  <h6>
                    {setInfo5}
                    {setSignatureHeroes}
                  </h6>
                </MediumText>
              </SpacedHorizontalContainer>
              <Marginer direction='vertical' margin='1.2em' />

              <SmallLogo>
                <img src={SinnersLogo} alt='test' />
              </SmallLogo>
            </DetailsContainer>
            ;
          </BottomContainer>
        </CardContainer>
      </CardWrapper>
    </>
  );
}

const CardContainer = styled(motion.div)`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: ${accent};

  color: ${secondary};
  position: relative;
  cursor: grab;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${desaturatedRed};
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 50%;
`;

const PlayerStyle = styled(motion.div)`
  width: auto;
  height: 100%;
  z-index: 1;
  position: absolute;
  user-select: none;
  align-self: center;
  bottom: 0;
  top: 0;
  right: 0;

  img {
    width: auto;
    height: 100%;
    user-select: none;
    margin-top: 0.05rem;
  }
`;

const NicknameStyle = styled.h2`
  font-size: 5rem;
  align-self: flex-start;
  justify-content: center;
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0.5rem 0 0.5rem;
`;

const MediumText = styled.span`
  font-size: 1rem;
  color: ${secondary};
  font-weight: 400;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SmallLogo = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 0.5rem;

  img {
    width: auto;
    height: 1.5rem;
  }
`;

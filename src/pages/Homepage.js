import React from 'react';
// Page Components

import Carousel from '../components/Carousel';
import { SliderData } from '../Data/SliderData';
import SponsorShowcase from '../components/SponsorShowcase';
import SponsorItem from '../components/SponsorItem';
import SponsorsBar from '../components/SponsorsBar';
import { sponsorItemLeft, sponsorItemRight } from '../components/animation';

// Style
import styled from 'styled-components';

// Images
import SteelseriesHeadset from '../img/SponsorItems/steelseriesHeadsets.png';
import SsStuff from '../img/SponsorItems/ssStuff.png';
import HyperxStuff from '../img/SponsorItems/hyperxStuff.png';
import RazerMouse from '../img/SponsorItems/razerMouse.png';
import RazerLaptop from '../img/SponsorItems/razerLaptop.png';

const sponsorItems = [
  {
    setImage: SteelseriesHeadset,
    setAlt: 'Steelseries Headset',
    setText:
      'The SteelSeries Siberia Elite headset delivers on the iconic Siberia promises of outstanding sound and long-wearing comfort for the discerning gamer. Siberia Elite features spectacular, full-range sound, tuned for gaming but also excellent for music and multimedia with natural, accurate bass extension, high-frequency detail, and phenomenal impact.',
    setVariants: sponsorItemLeft,
  },
  {
    setImage: SsStuff,
    setAlt: 'Steelseries mouse and mousepad',
    setText:
      'SteelSeries soft mouse mats are designed using durable micro-woven cloth and come in a variety of sizes from large and XXL to Giant. SteelSeries QcK gaming mousepads and mats utilize a surface material with a high thread count for smooth and precise mouse control in any gaming arena.',
    setVariants: sponsorItemRight,
  },
  {
    setImage: HyperxStuff,
    setAlt: 'HyperX keyboard and mousepad',
    setText:
      'The HyperX Alloy Origins™ Core is an ultra-compact, sturdy tenkeyless keyboard featuring custom HyperX mechanical switches designed to give gamers the best blend of style, performance, and reliability. These key switches have exposed LEDs for stunning lighting with an actuation force and travel distance elegantly balanced for responsiveness and accuracy.',
    setVariants: sponsorItemLeft,
  },

  {
    setImage: RazerMouse,
    setAlt: 'Razer mouse',
    setText:
      'For more than a decade, the Razer DeathAdder line has been a mainstay in the global esports arena. It has garnered a reputation for reliability that gamers swear by due to its proven durability and ergonomics. Now, we’re making it even more accessible with its latest successor—the Razer DeathAdder Essential.',
    setVariants: sponsorItemRight,
  },
  {
    setImage: RazerLaptop,
    setAlt: 'Razer laptop',
    setText:
      'Just when you thought a gaming laptop couldn’t be any more beastly—introducing the new Razer Blade 15, now available with the latest 12th Gen Intel® Core™ processor (14-core) and NVIDIA® GeForce RTX™ 30 Series Laptop GPUs for the most powerful gaming laptop graphics ever. With your choice of a Full HD 360Hz, QHD 240Hz (G-SYNC), or new UHD 144Hz display, enjoy unrivalled performance packed into the thinnest 15” RTX gaming laptop chassis ever.',
    setVariants: sponsorItemLeft,
  },
];
const Homepage = () => {
  return (
    <div>
      <DivStyle>
        <Carousel slides={SliderData} />
      </DivStyle>
      <SponsorShowcase>
        {sponsorItems.map((item, index) => (
          <SponsorItem
            setImage={item.setImage}
            setAlt={item.setAlt}
            setText={item.setText}
            key={index}
            setVariants={item.setVariants}
          />
        ))}
      </SponsorShowcase>
      <SponsorsBar></SponsorsBar>
    </div>
  );
};

const DivStyle = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default Homepage;

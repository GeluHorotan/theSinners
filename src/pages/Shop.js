import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import { motion, useCycle } from 'framer-motion';
import { LayoutGroup, layout, AnimatePresence } from 'framer-motion';
const Shop = () => {
  const [heroesList, setHeroesList] = useState();
  const [colors, setColors] = useState();
  const [filteredColors, setFilteredColors] = useState();

  const getListHeroes = async () => {
    const res = await fetch(`/.netlify/functions/helloWorld/`);
    const json = await res.json();
    setHeroesList(json.result.data.heroes);
    setColors([
      { name: 'yellowish', color: '#FF5733' },
      { name: 'greenishd', color: '#9C3B26' },
      { name: 'g1', color: '#373636' },
      { name: 'g2', color: '#660D0D' },
      { name: 'g3', color: '#BAC844' },
      { name: 'pu3d', color: '#55169C' },
      { name: 'darker', color: '#210B39' },
      { name: 'pinkd', color: '#EF1BC5' },
      { name: 'yelsodfs', color: '#EF7B1B' },
    ]);
    setFilteredColors([
      { name: 'yellowish', color: '#FF5733' },
      { name: 'greenishd', color: '#9C3B26' },
      { name: 'g1', color: '#373636' },
      { name: 'g2', color: '#660D0D' },
      { name: 'g3', color: '#BAC844' },
      { name: 'pu3d', color: '#55169C' },
      { name: 'darker', color: '#210B39' },
      { name: 'pinkd', color: '#EF1BC5' },
      { name: 'yelsodfs', color: '#EF7B1B' },
    ]);
  };

  useEffect(() => {
    getListHeroes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (heroesList) {
  //   heroesList.sort((a, b) => a.name_loc.localeCompare(b.name_loc));
  // }

  const filter = (fW) => {
    if (colors) {
      const filtered = colors.filter((color) => color.name.includes(fW));
      setFilteredColors(filtered);
    }
  };

  return (
    <>
      <StyledDiv>
        <div className='buttons'>
          <button onClick={() => filter('g')}>G </button>
          <button onClick={() => filter('y')}>Y </button>
          <button onClick={() => filter('d')}>D </button>
          <button onClick={() => setFilteredColors(colors)}>ALL </button>
        </div>
        <motion.div layout className='grid'>
          {filteredColors &&
            filteredColors.map((color, index) => {
              return (
                <AnimatePresence>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0, y: '100px' }}
                    transition={{
                      delay: 1,
                      x: { type: 'spring', stiffness: 100 },
                      default: { duration: 0.5 },
                    }}
                    style={{
                      background: `${color.color}`,
                      width: '5rem',
                      height: '5rem',
                    }}
                  >
                    <p>{color.name}</p>
                  </motion.div>
                </AnimatePresence>
              );
            })}
        </motion.div>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    margin: 2rem 0;
  }

  .grid {
    width: 100%;
    height: 100vh;
    display: grid;
    gap: 5rem;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default Shop;

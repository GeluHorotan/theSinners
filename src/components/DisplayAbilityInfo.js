import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { displayUpgrade } from '../Functions/for Hero Component/displayUpgrade';
import { displayDamageType } from '../Functions/for Hero Component/displayDamageType';
import { displayPierce } from '../Functions/for Hero Component/displayPierce';
import { displayDispelType } from '../Functions/for Hero Component/displayDispelType';
import { conditionalRendering } from '../Functions/for Hero Component/conditionalRendering';
import { conditionalBottom } from '../Functions/for Hero Component/conditionalBottom';
import { escapeText } from '../Functions/for Hero Component/escapeText';
const DisplayAbilityInfo = ({ spell, isUpgrade }) => {
  const [spellBehavior, setSpellBehavior] = useState();

  const getSpellBehavior = async () => {
    const res = await fetch('https://api.opendota.com/api/constants/abilities');
    const json = await res.json();
    setSpellBehavior(
      Object.values(json).filter(
        (heroSpell) => heroSpell.dname === spell.name_loc
      )
    );
  };

  useEffect(() => {
    getSpellBehavior();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spell]);

  return (
    <AbilityStyles
      background={`url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${spell.name}.png)`}
    >
      <div className='top_container'>
        <div className='ability_image'></div>
        <div className='top_section'>
          <h5>{spell.name_loc}</h5>

          {displayUpgrade(spell, isUpgrade)}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {escapeText(spell.desc_loc, spell).props.children[0]}
          </ReactMarkdown>
        </div>
      </div>
      <div className='middle_section'>
        {conditionalRendering(spell, isUpgrade) && spellBehavior && (
          <>
            <TopValueStyles>
              <>
                <div className='middle_column_container'>
                  <div className='ability_value'>
                    <p className='ability_heading_title'>ABILITY:</p>

                    {spellBehavior.length !== 0 &&
                    Array.isArray(spellBehavior[0].behavior)
                      ? spellBehavior[0].behavior[0]
                      : spellBehavior.length === 0
                      ? ''
                      : spellBehavior[0].behavior}
                  </div>
                  {displayDamageType(spell.damage)}
                </div>
                <div className='middle_column_container'>
                  {displayPierce(spell.immunity)}
                  {displayDispelType(spell.dispellable)}
                </div>
              </>
            </TopValueStyles>
            <div className='middle_middle_container'>
              {spell.damages[0] != 0 && (
                <div className='ability_value'>
                  {spell &&
                    Object.keys(spell).map((key, index) => {
                      if (key === 'damages')
                        return (
                          <div key={index} className='ability_heading_title'>
                            {key.toUpperCase()}:
                          </div>
                        );
                    })}
                  {spell.damages.join(' / ')}
                </div>
              )}

              {spell &&
                spell.special_values.map((value, index) => {
                  if (value.heading_loc.length !== 0) {
                    return (
                      <div key={index} className='ability_value'>
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeRaw]}
                          code={true}
                          className='ability_heading_title'
                          components={{ p: 'span' }}
                        >
                          {value.heading_loc}
                        </ReactMarkdown>

                        {value.heading_loc
                          ? value.values_float
                              .map((number, index) => {
                                return number.toFixed(1);
                              })
                              .join(' / ')
                          : value.is_percentage === true
                          ? ' %'
                          : ''}
                      </div>
                    );
                  }
                })}
            </div>
          </>
        )}
        {conditionalBottom(spell, isUpgrade) && (
          <>
            <BottomValuesStyles>
              {spell.special_values.map((value, index) => {
                if (
                  (value.name === 'AbilityCooldown' &&
                    value.values_float != 0) ||
                  (value.name === 'AbilityManaCost' && value.values_float != 0)
                )
                  return (
                    <div key={index} className='bottom_values_container'>
                      <div className='bottom_values'>
                        <div
                          className={`${
                            value.name === 'AbilityCooldown'
                              ? 'bottom_values_cd_img'
                              : 'bottom_values_mana'
                          }`}
                        ></div>
                        {value.name === 'AbilityCooldown'
                          ? value.values_float
                              .map((number) => {
                                return number.toFixed(1);
                              })
                              .join(' / ')
                          : value.values_float.join(' / ')}
                      </div>
                    </div>
                  );
              })}
            </BottomValuesStyles>
            <div className='ability_lore'>{spell.lore_loc}</div>
          </>
        )}
      </div>
    </AbilityStyles>
  );
};
const AbilityStyles = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  min-height: 35rem;
  .top_container {
    background-color: #121212;

    padding: 0.3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    white-space: pre-wrap;

    .top_section {
      width: 75%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .top_ability_upgrade {
      background-color: #1c2e50;

      color: #ddd;
      display: inline-flex;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      padding: 3px 8px;
      margin: 3px 0px;
      border-radius: 4px;
      width: fit-content;
    }
  }
  .ability_image {
    background: ${(props) => props.background} center center no-repeat;
    background-size: 6rem;
    width: 6rem;
    height: 6rem;
    margin: 10px 15px 10px 10px;
    box-shadow: 0px 0px 8px #000;
  }

  .middle_section {
    width: 100%;
    background-color: #000;

    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 1rem;

    gap: 2rem;
    .middle_middle_container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .ability_value {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: fit-content;
      gap: 0.5rem;
      width: 100%;

      .ability_details_cooldown_img {
        background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png');
        width: 16px;
        height: 16px;
        border-radius: 3px;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    .ability_heading_title {
      color: #737373;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
  .ability_lore {
    width: 100%;
    background-color: #111;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px;
    font-style: italic;
    font-size: 0.875rem;
    color: #aaa;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

const BottomValuesStyles = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .bottom_values {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .bottom_values_cd_img {
    background: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/cooldown.png');
    width: 1rem;
    height: 1rem;
    border-radius: 3px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bottom_values_mana {
    width: 1rem;
    height: 1rem;
    border-radius: 3px;
    background: linear-gradient(#00a4db, #007196);
  }
`;

const TopValueStyles = styled.div`
  display: flex;
  justify-content: space-between;

  .middle_column_container {
    display: flex;
    width: fit-content;
    flex-direction: column;
    min-height: 0;
    justify-content: space-between;
    align-items: center;

    .justify__value_right {
      justify-content: flex-end;
    }
  }
`;

export default DisplayAbilityInfo;

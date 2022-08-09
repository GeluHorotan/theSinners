import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sorter } from '../Functions/sorter';
import { useQuery } from 'react-query';
import Image from '../components/Image';
import { getName } from '../Functions/getName';
import { ItemsContext, HeroesContext } from '../App';
import { Link } from 'react-router-dom';

const fetchSelectedPatch = async (id) => {
  const res = await fetch(`/.netlify/functions/lastPatch/?lastPatchId=${id}`);
  return res.json();
};

const Patches = () => {
  const [patchList, setPatchList] = useState();
  const [lastPatch, setLastPatch] = useState();
  const dotaItems = React.useContext(ItemsContext);
  const dotaHeroes = React.useContext(HeroesContext);

  const getPatchList = async () => {
    const res = await fetch('/.netlify/functions/patchList/');
    const json = await res.json();
    setPatchList((prevState) => sorter(json.patches, 'descending', true));
  };

  const getLastPatch = async () => {
    if (patchList) {
      setLastPatch((prevState) => patchList[0]);
    }
  };

  useEffect(() => {
    getLastPatch();
  }, [patchList]);

  useEffect(() => {
    getPatchList();
  }, []);

  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['events', lastPatch ? lastPatch.patch_number : ''],
    () => (lastPatch ? fetchSelectedPatch(lastPatch.patch_number) : ''),
    { keepPreviousData: true }
  );

  if (dotaHeroes && data) {
    data.heroes.sort((a, b) =>
      getName(dotaHeroes, a.hero_id, 'hero').localeCompare(
        getName(dotaHeroes, b.hero_id, 'hero')
      )
    );
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (patchList && data && dotaItems)
    return (
      <Wrapper>
        <div className='header'>
          <div className='label'>Gameplay Update</div>
          <div className='notes_title'>{patchList[0].patch_number}</div>
        </div>
        <BodyStyles>
          <div className='update_section'>
            <div className='patch_notes_label'>GENERAL UPDATES</div>
            <GeneralStyles>
              {data.generic.map((generalNote, index) => {
                return <div className='note_info'>{generalNote.note}</div>;
              })}
            </GeneralStyles>
          </div>
          <div className='update_section'>
            <div className='patch_notes_label'>ITEM UPDATES</div>
            <ItemStyles>
              {data.items.map((item, index) => {
                return (
                  <div className='patch_note_item'>
                    <div className='item_header'>
                      <Image
                        isItem
                        className={'item_logo'}
                        id={item.ability_id}
                      ></Image>
                      <div className='item_right_section'>
                        <div className='item_name'>
                          {getName(dotaItems, item.ability_id, 'item').replace(
                            '_',
                            ' '
                          )}
                        </div>
                      </div>
                    </div>
                    {item.ability_notes.map((note, index) => {
                      return (
                        <div className='item_notes'>
                          <div className='dot'></div>
                          <div className='note'>{note.note}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </ItemStyles>
          </div>
          <div className='update_section'>
            <div className='patch_notes_label'>HERO UPDATES</div>
            <HeroStyles>
              {data.heroes.map((hero, index) => {
                return (
                  <div className='patch_note_hero'>
                    <Link to='#'>
                      <Image
                        isHero
                        isPortrait
                        className={'hero_image'}
                        id={hero.hero_id}
                      ></Image>
                      <div className='right_section'>{hero.hero_id}</div>
                    </Link>
                    <div className='patch_notes_hero'>
                      {hero.hero_notes &&
                        hero.hero_notes.map((note, index) => {
                          return (
                            <div className='hero_note'>
                              <div className='note_element'>
                                <div className='dot'></div>
                                <div className='note'>{note.note}</div>
                              </div>
                            </div>
                          );
                        })}
                      {hero.abilities &&
                        hero.abilities.map((ability, index) => {
                          console.log(ability);

                          return ability.ability_notes.map(
                            (abilityNote, index) => {
                              return (
                                <div className='hero_note'>
                                  <div className='ability_note'>
                                    <div className='ability_icon'>
                                      {ability.ability_id}
                                    </div>
                                    <div className='right_section'>
                                      <div className='ability_name'>
                                        {ability.ability_id}
                                      </div>
                                      <div className='note_element'>
                                        <div
                                          style={{
                                            width: '20px',
                                            minWidth: '20px',
                                          }}
                                        ></div>
                                        <div className='dot'></div>
                                        <div className='note'>
                                          {abilityNote.note}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </HeroStyles>
          </div>
        </BodyStyles>
      </Wrapper>
    );
};

const Wrapper = styled.section`
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/featured.jpg');
  width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: repeat-y;
  background-color: #151618;
  background-position: center;
  clear: both;
  .header {
    width: 100%;
    background-color: #000;
    margin-top: 140px;
    padding: 30px 0px;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .label {
      width: 900px;
      color: #ed3b1c;
      font-size: 32px;
      letter-spacing: 4px;
    }
    .notes_title {
      width: 900px;
      color: #ed3b1c;
      font-size: 72px;
      font-weight: bold;
      letter-spacing: 8px;
    }
  }
`;

const BodyStyles = styled.section`
  width: 100%;
  max-width: 900px;
  padding-top: 32px;
  min-height: 0;
  display: flex;
  flex-direction: column;
  .update_section {
    display: block;
    width: 100%;
    .patch_notes_label {
      background: linear-gradient(to right, #833312ff, #83331200);
      border-left: 2px solid #ff5005;
      font-size: 30px;
      font-weight: 600;
      font-family: 'Reaver', serif;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #fff;
      text-shadow: 0px 0px 5px #000;
      box-shadow: 0px 0px 30px #000;
      padding: 12px 20px;
    }
  }
`;

const GeneralStyles = styled.section`
  width: 100%;
  border-left: 2px solid #ffffff10;
  margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.38) 3.07%,
    rgba(6, 37, 65, 0.3) 88.06%
  );
  box-shadow: 0px 0px 50px #000;
  min-height: 0;
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  line-height: 2.5rem;
  .note_info {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 18px;
    letter-spacing: 2px;
    color: #fff;
    z-index: 5;
  }
`;

const HeroStyles = styled.section`
  width: 100%;
  border-left: 2px solid #ffffff10;
  margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.38) 3.07%,
    rgba(6, 37, 65, 0.3) 88.06%
  );
  box-shadow: 0px 0px 50px #000;
  min-height: 0;
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  line-height: 2.5rem;
  .patch_note_hero {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 18px;
    padding-bottom: 0px;
    border-left: 2px solid #ffffff10;
    margin-bottom: 30px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.38) 3.07%,
      rgba(6, 37, 65, 0.3) 88.06%
    );
    box-shadow: 0px 0px 50px #000;
    a {
      width: 100%;
      height: 72px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 24px;
      .hero_image {
        width: 128px;
        height: 72px;
        box-shadow: 0px 0px 20px #000;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 20px;
      }
      .right_section {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
      }
    }

    .hero_note {
      width: 100%;
      min-height: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      .note_element {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        .dot {
          width: 3px;
          height: 3px;
          min-width: 5px;
          min-height: 5px;
          border-radius: 3px;
          background-color: #999;
          margin-right: 10px;
          margin-top: 12px;
        }
        .note {
          font-size: 20px;
          color: #bbbbbbee;
          line-height: 30px;
          font-weight: 200;
        }

        .ability_note {
          width: 100%;
          display: flex;
          flex-direction: row;
          .ability_icon {
            width: 55px;
            height: 55px;
            min-width: 55px;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
`;

const ItemStyles = styled.section`
  width: 100%;
  border-left: 2px solid #ffffff10;
  margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.38) 3.07%,
    rgba(6, 37, 65, 0.3) 88.06%
  );
  box-shadow: 0px 0px 50px #000;
  min-height: 0;
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  .patch_note_item {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    padding-bottom: 0px;
    margin-bottom: 20px;
    .item_header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 72px;
        height: 52px;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 20px #000;
        margin-right: 16px;
        margin-bottom: 10px;
      }
      .item_right_section {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        .item_name {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: 'Reaver', serif;
        }
      }
    }
    .item_notes {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      .dot {
        width: 3px;
        height: 3px;
        min-width: 5px;
        min-height: 5px;
        border-radius: 3px;
        background-color: #999;
        margin-right: 10px;
        margin-top: 12px;
      }
      .note {
        font-size: 20px;
        color: #bbbbbbee;
        line-height: 30px;
        font-weight: 200;
      }
    }
  }
`;

export default Patches;

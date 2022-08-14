import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sorter } from '../Functions/sorter';
import { useQuery } from 'react-query';
import Image from '../components/Image';
import { getName } from '../Functions/getName';
import { ItemsContext, HeroesContext, AbilityContext } from '../App';
import { Link } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import DropdownMenu from '../DropdownMenu';
import { Menu } from '@headlessui/react';
import Error404 from '../components/Error404';
import ErrorHandler from '../components/ErrorHandler';
import { obsH2, primary } from '../Utility/Colors';

const fetchSelectedPatch = async (id) => {
  const res = await fetch(`/.netlify/functions/lastPatch/?lastPatchId=${id}`);
  return res.json();
};

const Patches = () => {
  const [patchList, setPatchList] = useState();
  const [lastPatch, setLastPatch] = useState();
  const dotaItems = React.useContext(ItemsContext);
  const dotaHeroes = React.useContext(HeroesContext);
  const dotaAbilities = React.useContext(AbilityContext);

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

  if (dotaHeroes && data.heroes) {
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

  if (patchList && data && dotaItems && dotaAbilities && lastPatch)
    return (
      <Wrapper>
        <div className='header'>
          <div className='left_part'>
            <div className='label'>Gameplay Update</div>
            <div className='notes_title'>{lastPatch.patch_number}</div>
          </div>
          <div className='dropdown_container'>
            <DropdownMenu
              title={lastPatch.patch_number}
              className={'patch_dropdown'}
            >
              {patchList.map((patch, index) => {
                return (
                  <Menu.Item>
                    <div
                      className='menu_options'
                      onClick={() => {
                        setLastPatch((prevState) => patch);
                      }}
                    >
                      {patch.patch_number}
                    </div>
                  </Menu.Item>
                );
              })}
            </DropdownMenu>
          </div>
        </div>
        <BodyStyles>
          <NoPatchStyles>
            {' '}
            <ErrorHandler>
              {' '}
              Ups, it looks like we couldn't find any gameplay changes in the
              API. <br></br>
              Try searching for another patch version.
            </ErrorHandler>
          </NoPatchStyles>
          {data.generic &&
            data.neutral_creeps &&
            data.items &&
            data.neutral_items &&
            data.heroes && <NoPatchStyles> {data.patch_number}</NoPatchStyles>}
          {data.generic && (
            <div className='update_section'>
              <div className='patch_notes_label'>GENERAL UPDATES</div>
              <GeneralStyles>
                {data.generic.map((generalNote, index) => {
                  return (
                    <div className='note_info'>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                      >
                        {generalNote.note}
                      </ReactMarkdown>
                    </div>
                  );
                })}
              </GeneralStyles>
            </div>
          )}

          {data.neutral_creeps && (
            <div className='update_section'>
              <div className='patch_notes_label'>NEUTRAL CREEP UPDATES</div>
              <NeutralStyles>
                {data.neutral_creeps.map((creep, index) => {
                  return (
                    <div className='neutral_creep'>
                      <div className='neutral_creep_header'>
                        <Image
                          className='neutral_creep_icon'
                          id={creep.name}
                          isNeutral
                          alt={creep.localized_name}
                        />

                        <div className='neutral_right_section'>
                          <div className='neutral_name'>
                            {' '}
                            {creep.localized_name}
                          </div>
                          {creep.title && (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}
                            >
                              {creep.title}
                            </ReactMarkdown>
                          )}
                        </div>
                      </div>
                      <div className='neutral_notes'>
                        {creep.neutral_creep_notes.map((note, index) => {
                          return (
                            <div className='note_element'>
                              <div className='dot'></div>
                              <div className='note'>{note.note}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </NeutralStyles>
            </div>
          )}

          {data.items && (
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
                            {getName(
                              dotaItems,
                              item.ability_id,
                              'item'
                            ).replace('_', ' ')}
                          </div>
                          {item.title && (
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}
                            >
                              {item.title}
                            </ReactMarkdown>
                          )}
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
          )}

          {data.neutral_items && (
            <div className='update_section'>
              <div className='patch_notes_label'>NEUTRAL ITEM UPDATES</div>
              <NeutralItemStyles>
                {data.neutral_items.map((neutralItem, index) => {
                  return (
                    <div className='neutral_creep'>
                      <div className='neutral_creep_header'>
                        <Image
                          className='neutral_creep_icon'
                          id={neutralItem.ability_id}
                          isItem
                          alt={getName(
                            dotaItems,
                            neutralItem.ability_id,
                            'item'
                          )}
                        />

                        <div className='neutral_right_section'>
                          <div className='neutral_name'>
                            {' '}
                            {getName(dotaItems, neutralItem.ability_id, 'item')}
                          </div>
                        </div>
                      </div>
                      <div className='neutral_notes'>
                        {neutralItem.ability_notes.map((note, index) => {
                          return (
                            <div className='note_element'>
                              <div className='dot'></div>
                              <div className='note'>{note.note}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </NeutralItemStyles>
            </div>
          )}

          {data.heroes && (
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
                        <div className='right_section'>
                          {getName(dotaHeroes, hero.hero_id, 'hero').replace(
                            '_',
                            ' '
                          )}
                        </div>
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
                            return (
                              <div className='hero_note'>
                                <div className='ability_note'>
                                  <Image
                                    isSpell
                                    className='ability_icon'
                                    id={ability.ability_id}
                                  ></Image>

                                  <div className='ability_right_section'>
                                    <div className='ability_name'>
                                      {getName(
                                        dotaAbilities,
                                        ability.ability_id,
                                        'spell'
                                      )}
                                    </div>
                                    {ability.ability_notes.map(
                                      (abilityNote, index) => {
                                        return (
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
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                        {hero.talent_notes && (
                          <div className='talent_notes'>
                            <div className='talent_header'>TALENTS</div>
                            <div className='talent_container'>
                              {hero.talent_notes &&
                                hero.talent_notes.map((talent, index) => {
                                  return (
                                    <div className='note_element'>
                                      <div className='dot'></div>
                                      <div className='note'>{talent.note}</div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </HeroStyles>
            </div>
          )}
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
    width: 900px;
    background: linear-gradient(
      90deg,
      rgba(66, 66, 66, 0.38) 3.07%,
      rgba(18, 83, 139, 0.3) 88.06%
    );
    margin-top: 140px;
    padding: 2rem 1rem;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .left_part {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .label {
      color: ${obsH2};
      font-size: 32px;
      letter-spacing: 4px;
    }
    .notes_title {
      color: ${obsH2};
      font-size: 72px;
      font-weight: bold;
      letter-spacing: 8px;
    }
    .dropdown_container {
      width: 15%;
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

    p::before {
      content: '• ';
    }
    p {
      font-weight: 300;
      line-height: 1.5rem;
    }
  }
`;

const NeutralStyles = styled.section`
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
  .New {
    color: #36a15e;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
  }
  .neutral_creep {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    padding-bottom: 0px;
    margin-bottom: 20px;
    .neutral_creep_header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .neutral_creep_icon {
        width: 72px;
        height: 52px;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 20px #000;
        margin-right: 16px;
        margin-bottom: 10px;
      }
      .neutral_right_section {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        .neutral_name {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      }
    }
    .neutral_notes {
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
      }
    }
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
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
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

    .patch_notes_hero {
      width: 100%;
      min-height: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
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
        }
      }

      .right_section {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
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

        .right_section {
          flex-grow: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          .ability_name {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            font-family: 'Reaver', serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 4px;
            margin-left: 20px;
          }
          .note_element {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
          }
        }
      }
    }
    .ability_note {
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-direction: row;

      justify-content: center;
      align-items: center;
      .ability_icon {
        width: 55px;
        height: 55px;
        min-width: 55px;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .ability_right_section {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;

        .ability_name {
          font-size: 16px;
          font-weight: 600;
          color: #fff;

          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 4px;
          margin-left: 20px;
        }
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
            font-weight: 300;
          }
        }
      }
    }
  }

  .talent_notes {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    .talent_header {
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    .talent_container {
      idth: 100%;
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
  .New {
    color: #36a15e;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
  }
  .Reworked {
    color: #d05307;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
  }
  .patch_note_item {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    padding-bottom: 0px;
    margin-bottom: 5rem;

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

const NeutralItemStyles = styled.section`
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
  .New {
    color: #36a15e;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
  }
  .neutral_creep {
    width: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    padding-bottom: 0px;
    margin-bottom: 5rem;
    .neutral_creep_header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .neutral_creep_icon {
        width: 72px;
        height: 52px;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 20px #000;
        margin-right: 16px;
        margin-bottom: 10px;
      }
      .neutral_right_section {
        flex-grow: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        .neutral_name {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      }
    }
    .neutral_notes {
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
      }
    }
  }
`;

const NoPatchStyles = styled.section`
  width: 100%;

  color: #fff;
  border-left: 2px solid #ffffff10;
  margin-bottom: 30px;
  background: linear-gradient(
    90deg,
    rgba(66, 66, 66, 0.38) 3.07%,
    rgba(18, 83, 139, 0.3) 88.06%
  );
  box-shadow: 0px 0px 50px #000;
  min-height: 0;
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
`;

export default Patches;

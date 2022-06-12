import React from 'react';
import styled from 'styled-components';
import reactStringReplace from 'react-string-replace';
import { isElementType } from '@testing-library/user-event/dist/utils';

const TalentTree = ({ talents, abilities }) => {
  const rows = talents.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  let array = [];
  abilities.forEach((ability) =>
    ability.special_values.forEach((value) =>
      value.bonuses.length !== 0 ? array.push(value.bonuses) : null
    )
  );

  const getValue = (str) => {
    const value = str.split('_');
    return value[value.length - 1];
  };
  if (rows) {
    let i = 10;
    rows.forEach((row) => {
      row.splice(1, 0, i);
      i += 5;
    });
  }

  return (
    <TalentTreeStyles className='talent_container'>
      <h6 className='talent_title'>talent tree</h6>
      <div className='talents'>
        {rows &&
          rows.map((row, index) => {
            return (
              <div className='talent_row'>
                {row.map((talent, index) => {
                  return (
                    <div
                      className={
                        index === 1 ? 'talent_level_container' : 'talent_entry'
                      }
                    >
                      {index === 1 ? (
                        <div className='talent_level_number'>{talent}</div>
                      ) : null}{' '}
                      {reactStringReplace(
                        talent.name_loc,
                        /{s:(\w+)}/g,
                        (match, i) => (
                          <>
                            {talent.special_values.map((buff) => {
                              if (buff.name === 'value') {
                                return buff.values_float;
                              }
                            })}
                            {array.map((item, index) => {
                              if (item[0].name === talent.name) {
                                return item[0].value.toFixed(1);
                              }
                            })}
                          </>
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </TalentTreeStyles>
  );
};
const TalentTreeStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  gap: 0.6rem;
  background: linear-gradient(150deg, #68727c, #14171a);
  padding: 1.25rem;
  padding-bottom: 2.5rem;

  .talent_title {
    text-shadow: 0px 0px 5px #000;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
  }

  .talents {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    align-items: center;
    .talent_row {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 0 1rem;
      background: linear-gradient(150deg, #3c4247, #0a0c0e);
      border-top-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
      .talent_entry {
        flex-grow: 1;
        flex-basis: 1px;

        font-family: 'Radiance', sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;

        justify-content: center;
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        color: #ffffffbb;
      }
      .talent_level_container {
        border-radius: 50%;
        padding: 0.4rem;
        background: linear-gradient(325deg, #3c4247, #0a0c0e);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .talent_level_number {
          min-width: 4rem;
          min-height: 4rem;
          border-radius: 50%;
          background: #222;
          font-size: 1.25rem;
          font-weight: bold;
          letter-spacing: 2px;
          color: #e7d292;
          text-shadow: 0 0 0.5rem #ff531c;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;

export default TalentTree;

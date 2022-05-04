import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const removeDuplicates = (array) => {
  return array.filter((el, index) => array.indexOf(el) === index);
};

const About = () => {
  let ids = [6552334091, 6552288017, 6547247338, 6535358226, 6532598897];
  const [matchStats, setMatchStats] = useState([]);
  let games = [];
  const getMatchesData = () => {
    ids.forEach(async (id, index) => {
      if (ids.length !== 0) {
        const res = await fetch(`https://api.opendota.com/api/matches/${id}`);
        const json = await res.json();
        games.push(json);
      }
      setMatchStats([...matchStats, games]);
      setMatchStats(removeDuplicates(matchStats));
    });
  };
  console.log(matchStats);
  useEffect(() => {
    getMatchesData();
  }, []);
  return (
    <>
      {matchStats &&
        matchStats[0].map((game, index) => {
          return <p>{game.match_id}</p>;
        })}
      <TableStyle>
        <div>TABLE TEST</div>
        <div className='table-box'></div>
        <div className='table-row table-head'>
          <div className='table-cell first-cell'>
            <p>MATCH ID</p>
          </div>
          <div className='table-cell'>
            <p>HERO</p>
          </div>
          <div className='table-cell'>
            <p>KDA</p>
          </div>
        </div>
        <div className='table-row'>
          <div className='table-cell first-cell'>
            <p>54654765765</p>
          </div>
          <div className='table-cell'>
            <p>Templar Assassin</p>
          </div>
          <div className='table-cell last-cell'>
            <p>100/14/2</p>
          </div>
        </div>
        <div className='table-row'>
          <div className='table-cell first-cell'>
            <p>54654765765</p>
          </div>
          <div className='table-cell'>
            <p>Chaos Knight</p>
          </div>
          <div className='table-cell last-cell'>
            <p>1014231/1241234/12412</p>
          </div>
        </div>
        <div className='table-row'>
          <div className='table-cell first-cell'>
            <p>546547657655465476576554654765765</p>
          </div>
          <div className='table-cell'>
            <p>Phantom Lancer suck my cancer</p>
          </div>
          <div className='table-cell last-cell'>
            <p>1234321/34124324/234</p>
          </div>
        </div>
      </TableStyle>
    </>
  );
};

const TableStyle = styled.div`
  .table-box {
    margin: 50px auto;
  }
  .table-row {
    display: table;
    width: 80%;
    margin: 10px auto;
    background: transparent;
    padding: 12px 0;
    color: #555;
    font-size: 13px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 50, 0.3);
  }

  .table-cell {
    display: table-cell;
    width: 30%;
    text-align: center;
    padding: 4px 0;
    border-right: 1px solid #d6d4d4;
    vertical-align: middle;
  }

  .table-head {
    background: #8665f7;
    box-shadow: none;
    color: #fff;
    font-weight: 600;
  }

  .table-head .table-cell {
    border-right: none;
  }

  .last-cell {
    border-right: none;
  }

  .first-cell {
    text-align: left;
    padding-left: 10px;
  }
`;

export default About;

import React from 'react';
import styled from 'styled-components';

const Tabel = ({ children, tableClass, headers }) => {
  console.log(tableClass);
  console.log(headers);
  return (
    <StyledTable className={tableClass}>
      <div className='headers_row'>
        {headers &&
          headers.map((header, index) => {
            return <p>{header.name}</p>;
          })}
      </div>
      <div className='table_row'>{children}</div>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;

  .headers_row {
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .table_row {
    justify-content: space-between;
  }
`;

export default Tabel;

import React from 'react';
import styled from 'styled-components';
import { obsH } from '../Utility/Colors';

const Tabel = ({ children, className, headers, eliminationMode }) => {
  return (
    <div>
      <TabelStyles className={className}>
        <thead>
          <tr>
            {headers &&
              headers.map((header, index) => {
                return (
                  <th className={header.class}>{header.name.toUpperCase()}</th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {children}
          {eliminationMode && <tr className='elimination_overlay'></tr>}
        </tbody>
      </TabelStyles>
    </div>
  );
};

const TabelStyles = styled.table`
  border-collapse: collapse;
  width: 100%;
  position: relative;

  width: 25rem;

  th {
    background: ${obsH};
  }

  td,
  th {
    text-align: center;
    padding: 1rem 0.5rem;
  }

  .elimination_overlay {
    bottom: 0;
    width: 100%;
    left: 0;
    position: absolute;
    height: calc(100% - 77%);
    border-top: 1px solid rgb(146, 40, 32);
    background: linear-gradient(
      rgba(146, 40, 32, 0.2),
      rgba(146, 40, 32, 0.06)
    );
  }

  .striped:nth-child(even) {
    background-color: #dddddd;
  }
  .hover:hover {
    background-color: #61dafb;
  }
`;

export default Tabel;

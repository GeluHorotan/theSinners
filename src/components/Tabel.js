import React from 'react';
import styled from 'styled-components';
import { obsH } from '../Utility/Colors';

const Tabel = ({ children, className, headers }) => {
  return (
    <div>
      <TableStyles className={className}>
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
        <tbody>{children}</tbody>
      </TableStyles>
    </div>
  );
};

const TableStyles = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    background: ${obsH};
  }

  td,
  th {
    text-align: center;
    padding: 1rem 0.5rem;
  }

  .striped:nth-child(even) {
    background-color: #dddddd;
  }
  .hover:hover {
    background-color: #61dafb;
  }
`;

export default Tabel;

import React from 'react';
import { PropagateLoader } from 'react-spinners';

const FetchingLoading = () => {
  return (
    <div className='middle_align' style={{ marginTop: '5rem' }}>
      <PropagateLoader color='#fff' />
    </div>
  );
};

export default FetchingLoading;

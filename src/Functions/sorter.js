import React from 'react';

export const sorter = (element) => {
  const sorted = element.sort(
    (a, b) => a.series.scheduled_time - b.series.scheduled_time
  );

  return sorted;
};

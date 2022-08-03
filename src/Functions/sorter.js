import React from 'react';

export const sorter = (element, sign) => {
  if (sign === 'ascending') {
    const ascendingSorter = element.sort(
      (a, b) => a.series.scheduled_time - b.series.scheduled_time
    );
    return ascendingSorter;
  }

  if (sign === 'descending') {
    const descendingSorter = element.sort(
      (a, b) => b.series.scheduled_time - a.series.scheduled_time
    );
    return descendingSorter;
  }
};

import React from 'react';

export const sorter = (element, sign, isPatch) => {
  if (sign === 'ascending' && !isPatch) {
    const ascendingSorter = element.sort(
      (a, b) => a.series.scheduled_time - b.series.scheduled_time
    );
    return ascendingSorter;
  }
  if (isPatch && sign === 'ascending') {
    const ascendingSorter = element.sort(
      (a, b) => a.patch_timestamp - b.patch_timestamp
    );
    return ascendingSorter;
  }
  if (isPatch && sign === 'descending') {
    const ascendingSorter = element.sort(
      (a, b) => b.patch_timestamp - a.patch_timestamp
    );
    return ascendingSorter;
  }

  if (sign === 'descending' && !isPatch) {
    const descendingSorter = element.sort(
      (a, b) => b.series.scheduled_time - a.series.scheduled_time
    );
    return descendingSorter;
  }
};

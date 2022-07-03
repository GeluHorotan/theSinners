import React from 'react';
import moment from 'moment';

export const formatTimestamp = (timestamp) => {
  let t = new Date(timestamp / 1000);
  t.setMinutes(60);
  t.setSeconds(timestamp);
  let formatted = moment(t).format(`DD MMM. h:mm a`);
  return formatted;
};

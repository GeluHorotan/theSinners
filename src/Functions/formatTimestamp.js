import React from 'react';
import moment from 'moment';

export const formatTimestamp = (timestamp, format) => {
  let t = new Date(timestamp / 1000);

  t.setMinutes(60);
  t.setSeconds(timestamp);
  let formatted = moment(t).format(`DD MMM. h:mm A`);
  let fromNow = moment(t).endOf(t).fromNow();

  if (format === 'classic') {
    return formatted;
  }
  if (format === 'fromNow') {
    return fromNow;
  }
};

import { sliceEvents, createPlugin } from '@fullcalendar/core';
import React from 'react';

function CustomView(props) {
    const events = [
        { title: 'Event 1', start: '2024-04-19T10:00:00', end: '2024-04-19T12:00:00' },
        { title: 'Event 2', start: '2024-04-20T11:00:00', end: '2024-04-20T13:00:00' },
        { title: 'Event 3', start: '2024-04-21T09:00:00', end: '2024-04-21T11:00:00' }
      ];
      let segs = sliceEvents({ ...props, eventStore: events }, true); 

  return (
    <>
      <div className='view-title'>
        {props.dateProfile.currentRange.start.toUTCString()}
      </div>
      <div className='view-events'>
        {segs.length} events
      </div>
    </>
  );
}

const CustomViewPlugin = createPlugin({
  views: {
    custom: CustomView
  }
});

export default CustomViewPlugin;

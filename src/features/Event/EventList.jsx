import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

export default function EventList({events})
{
    return(
        <Fragment>
        
        {events.map(event=>
            <EventListItem key={event.id} event={event}/>
        )}
        </Fragment>
    );
    
}
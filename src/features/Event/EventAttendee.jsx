import React, { Fragment } from 'react';
import { Image, List } from 'semantic-ui-react';

export default function EventAttendee({attendee})
{
    return(
        <Fragment>
        <List.Item>
        
            <Image size="mini" circular src={attendee.photoURL}/>
            
                
            </List.Item>
        </Fragment>
    );
}
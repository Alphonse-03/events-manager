import React, { Fragment } from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventAttendee from './EventAttendee';

export default function EventListItem({event})
{
    return(
        <Fragment>
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={event.title}/>
                            <Item.Description content={event.description}/>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    date<Icon name="clock"/>
                    venue<Icon name="marker"/>
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                {event.attendees.map(attendee=>
                    <EventAttendee key={attendee.id} attendee={attendee}/>
                )}
                </List>
            </Segment>
            <Segment clearing>
                <span></span>
                <Button floated="right" color="instagram" content="View"/>
            </Segment>
            </Segment.Group>
        </Fragment>
    );
}
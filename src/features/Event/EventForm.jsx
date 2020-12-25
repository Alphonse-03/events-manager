import React, { Fragment } from 'react';
import { Button, Form, Icon, Segment } from 'semantic-ui-react';

export default function EventForm({setEventForm})
{
    return(
        <Fragment>
            <Segment clearing>
                <Form>
                <Form.Field>
                    <input type="text" placeholder='Event Title' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Company' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City' />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Venue' />
                </Form.Field>
                <Form.Field>
                    <input type="date" style={{marginBottom:"10px"}} />
                </Form.Field>
                </Form>
                <Button floated="right" color="green" content="Create"/>
                <Button onClick={() => setEventForm(false)} floated="right" color="white" content="Cancel"/>
                
            </Segment>
        </Fragment>
    );
}
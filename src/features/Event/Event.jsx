import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from './EventForm';
import EventList from './EventList';
import {sampleData} from './eventData';
export default function Event({eventForm,setEventForm})
{
    const[data,setData]=useState(sampleData);
    return(
    <Fragment>
    <Grid>
        <Grid.Column width={10}>
            <EventList events={data}/>
        </Grid.Column>
        <Grid.Column width={6}>
           {
               eventForm &&
               <EventForm setEventForm={setEventForm}/>
           };
            
        </Grid.Column>
    </Grid>
    </Fragment>);
}
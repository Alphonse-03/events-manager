
import cuid from 'cuid';
import React, { Fragment, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function EventForm({setEventForm , createEvent})
{
    
    const initialValues=
    {
        title:'',
        company:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }

    const[values,setValues]=useState(initialValues);
    function handleFormSubmit()
    {
        createEvent({...values,id:cuid(), hostedBy:"bob", attendees:[], hostPhotoURL:"/assets/default.png"});
        setEventForm(false);
    }
    function handleInputSubmit(e)
    {
        const{name,value}=e.target
        setValues({...values,[name]:value});   
    }
    return(
        <Fragment>
            <Segment clearing>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input  type="text" 
                            placeholder='Event Title' 
                            name="title"
                            value={values.title}
                            onChange={(e)=>handleInputSubmit(e)} 

                    />
                </Form.Field>
                <Form.Field>
                <input  type="text" 
                            placeholder='Company' 
                            name="company"
                            value={values.company}
                            onChange={(e)=>handleInputSubmit(e)} 

                    />
                </Form.Field>
                <Form.Field>
                <input  type="text" 
                            placeholder='Description' 
                            name="description"
                            value={values.description}
                            onChange={(e)=>handleInputSubmit(e)} 

                    />
                </Form.Field>
                <Form.Field>
                <input  type="text" 
                            placeholder='City' 
                            name="city"
                            value={values.city}
                            onChange={(e)=>handleInputSubmit(e)} 

                    />
                </Form.Field>
                <Form.Field>
                    <input  type="text" 
                            placeholder='Venue' 
                            name="venue"
                            value={values.venue}
                            onChange={(e)=>handleInputSubmit(e)} 
                    />
                </Form.Field>
                <Form.Field>
                    <input  type="date" 
                            style={{marginBottom:"10px"}}
                            name="date"
                            value={values.date}
                            onChange={(e)=>handleInputSubmit(e)}/>
                </Form.Field>
                <Button floated="right" color="green" content="Create"/>
                <Button onClick={() => setEventForm(false)} floated="right" color="white" content="Cancel"/>
            </Form>
                
                
            </Segment>
        </Fragment>
    );
}
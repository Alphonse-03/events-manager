import React, { Fragment } from 'react';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';

export default function Navbar({setEventForm})
{
    return(
        <Fragment>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item header>
                        <Icon name='calendar'/>
                            re-vents
                    </Menu.Item>
                    <Menu.Item name='event'/>
                    <Menu.Item>
                        <Button onClick={() => setEventForm(true)} color="green" inverted content="Create Event"/>
                    </Menu.Item>
                    <Menu.Item position="right">
                        <Button basic inverted content="Login" style={{marginRight:'10px'}}/>
                        <Button basic inverted content="Register"/>
                    </Menu.Item>

                </Container>
                
            </Menu>
        </Fragment>
    );
}

import './App.css';

import {Col,Row,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { intervalToDuration } from 'date-fns'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';
import { white } from 'material-ui/styles/colors';



function Navbar(props) {
    
      

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen_Notification, setDropdownOpen_Notification] = useState(false);

  const [notifications, setnotifications] = useState(0);
  
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const toggle_Notification = () => setDropdownOpen_Notification(prevState => !prevState);

//   const classes = useStyles();

  return (
    <div className="" style={{backgroundColor:'#202342'}}>
      <Row>
        <Col md={{size:0,offset:8}} >
        {/* <div className={classes.root}> */}
        <Dropdown isOpen={dropdownOpen_Notification} toggle={toggle_Notification} >
          <DropdownToggle  style={{backgroundColor:'#202342'}}>
            <Row>
              <Col >
              <Badge  badgeContent={notifications} color="primary">
                <NotificationsIcon />
            </Badge>              
            </Col>  
            </Row>
          </DropdownToggle>
          <DropdownMenu style={{backgroundColor:'#3D447B', padding:'4rem', paddingLeft:'1rem', paddingTop:'1rem'}}>
            <h5 style={{margin:'2%', color:'white'}}> Notifications </h5>
            {
              props.notifications.map((not)=>
              <Row>
                <Col md='2'>
                <CheckCircleIcon/>
                </Col>
                <Col md={{size:8, offset:2}}>
                <DropdownItem>
                  <Row>
                    <Col>
                    {not.email}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <small>
                    {intervalToDuration({start:not.date,end:new Date()}).minutes} minutes ago                   
                    </small>
                      
                    </Col>
                  </Row>
                </DropdownItem>
                </Col>
              </Row>
              

              )

            }
          </DropdownMenu>
        </Dropdown>
        {/* </div> */}
        </Col>

        <Col md='2' xs='1'>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle  style={{backgroundColor:'#202342'}}>
            <Row>
              <Col md='4'>
                <Avatar alt="Remy Sharp" src="https://thispersondoesnotexist.com/image" />
              </Col>
              <Col md='8' >
                <Row>
                <p style={{margin:0}}> Ahmed Hassan</p>
                </Row>
                <Row>
                <small> ahmed@gamil.com</small>
                </Row>
              </Col>  
            </Row>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Some Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </Col>
      </Row>
  
    </div>
  );
}

export default Navbar;

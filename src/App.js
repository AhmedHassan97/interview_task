import './App.css';

import {Col,Row,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button,ButtonGroup } from 'reactstrap'
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Navbar from './nav'
import StickyHeadTable from './table'
import { white } from 'material-ui/styles/colors';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Badge from '@material-ui/core/Badge';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import LaptopIcon from '@material-ui/icons/Laptop';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import {  Modal, ModalBody, ModalFooter } from 'reactstrap';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import { intervalToDuration } from 'date-fns'

function App() {
  const [notifications, setNotifications] = useState([]);
  
  const [creditCard, setCreditCard] = useState('2222-2222-2222-2222');
  const [seen, setSeen] = useState(false);
  const [eamil, setemail] = useState('ahmed@gmail.com');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [sentEmail, setsentEmail] = useState('');


  
  return (
    <div className="App">
      <Navbar notifications={notifications}></Navbar>
      <Row style={{backgroundColor:'#202342'}}>
       <Col md='8'>
          <Row style={{margin:'2%'}}>
            <Col md={{size:4}}>
              <Card style={{backgroundColor:'#2B2F55',color:white}}>
                <Card.Body>
                  {/* <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  <Card.Text>
                    Filter By: 
                  </Card.Text>
                  <Row style={{margin:'2%'}}>
                    <Col>
                    <ButtonGroup className="mb-2" >
                      <Button style={{margin:'2%'}}>1D</Button>
                      <Button style={{margin:'2%'}}color='primary' >1M</Button>
                      <Button style={{margin:'2%'}}>1Y</Button>
                    </ButtonGroup> 
                    </Col>
                  </Row>
                  
                </Card.Body>
              </Card>
            </Col>
            {/*  */}
            <Col md={{size:4}}>
            <Card style={{backgroundColor:'#2B2F55',color:white}}>
              <Card.Body>
                <Row style={{margin:'3.4%'}}>
                  <Col md='6'>
                    <Row >
                    <Card.Text style={{margin:'2%'}}> 
                      Total Checkouts
                    </Card.Text>
                    </Row>
                    <Row>
                      
                    <Card.Text style={{margin:'2%'}} >
                      <big style={{color:'#63F4F7',fontSize:28}}>
                      72
                        </big>
                        <small>
                          /82
                        </small>
                    </Card.Text>
                    </Row> 
                  </Col>
                  <Col md={{size:2,offset:4}} style={{marginTop:'3%'}}>
                  <Badge  style={{backgroundColor:'#63F4F7', borderRadius:'50%'}} color="#63F4F7">
                <AddShoppingCartIcon />
            </Badge> 
                  </Col>
                </Row>
                
              </Card.Body>
            </Card>
            </Col>
            {/*  */}
            <Col md={{size:4}}>
            <Card style={{backgroundColor:'#2B2F55',color:white}}>
              <Card.Body>
                <Row style={{margin:'3.4%'}}>
                  <Col md='6'>
                    <Row >
                    <Card.Text style={{margin:'2%'}}> 
                      Total Failure
                    </Card.Text>
                    </Row>
                    <Row>
                      
                    <Card.Text style={{margin:'2%'}} >
                      <big style={{color:'#FE7448',fontSize:28}}>
                      10
                        </big>
                        <small>
                          /82
                        </small>
                    </Card.Text>
                    </Row> 
                  </Col>
                  <Col md={{size:2,offset:4}} style={{marginTop:'3%'}}>
                  <Badge  style={{backgroundColor:'#FE7448', borderRadius:'50%'}} >
                <AddShoppingCartIcon />
            </Badge> 
                  </Col>
                </Row>
                
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row style={{margin:'2%'}}>
            <Col md='12' >
            <StickyHeadTable />
            </Col>
          </Row>
       </Col>

       <Col md="4">
        <Row style={{margin:'3%', width:'115%'}}>
          <Col md='10'>
          <Card  style={{backgroundColor:'#2B2F55',color:white}}>
              <Card.Body style={{marginBottom:'2%'}}>
                 <Row>
                   <Col>
                    <small>Licence Key</small>
                   </Col>
                 </Row>
                 {seen ? (
                  <Row>
                   <Col md='8'>
                    <big>
                      {creditCard}
                    </big>
                   </Col>

                   <Col md={{size:2,offset:2}}>
                     <button style={{borderRadius:'50%',backgroundColor:'#1EC1C3'}} onClick={()=>setSeen(!seen)}>
                     <VisibilityIcon/>
                     </button>
                    
                   </Col>
                 </Row>
                 ):(
                  <Row>
                  <Col md='9'>
                   <big>
                     XXXX-XXXX-XXXX-XXXX
                   </big>
                  </Col>

                  <Col md={{size:2,offset:1}}>
                    <button style={{borderRadius:'50%',backgroundColor:'#1EC1C3'}} onClick={()=>setSeen(!seen)}>
                    <VisibilityOffIcon/>
                    </button>
                   
                  </Col>
                </Row>
                 )}
                 <Row style={{marginTop:'10%'}}>
                   <Col md='6' >
                    <Button color='primary' style={{width:'135%'}}>
                      <Row>
                        <Col md='8' style={{marginLeft:'-10%'}}>
                        Renew Now  
                        </Col>
                        <Col md='4' style={{marginRight:'-10%'}}>
                        <b>Stripe</b>   
                        </Col>
                      </Row>
                    </Button>
                   </Col>

                   <Col md={{size:4,offset:2}}>
                    <Button style={{padding:'9px',backgroundColor:'#323662',color:'#EC4165'}}>
                      Deacticvate
                    </Button>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                   <small>Renew Date 12 april 2020</small>
                   </Col>
                 </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{margin:'2%'}}>
          <Col md='12'>
          <Card  style={{backgroundColor:'#2B2F55',color:white}}>
              <Card.Body>
                <Row>
                  <Col>
                  <Row>
                    <Col>
                    <EditAttributesIcon/> Discord ID
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    {eamil}
                    </Col>
                  </Row>
                    
                  </Col>
                  <Col md={{size:4,offset:2}}>
                    <Button style={{padding:'9px',backgroundColor:'#323662',color:'#EC4165'}}>
                      Unbind
                    </Button>
                   </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{margin:'2%'}}>
          <Col md='12'>
          <Card style={{backgroundColor:'#2B2F55',color:white}}>
              <Card.Body>
               
                <Row>
                  <Col>
              
                  <TransferWithinAStationIcon /> Transfer
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <small> current email </small>
                    <br></br>
                    <p>{eamil}</p>
                  </Col>
                  <Col md={{size:4,offset:2}}>
                    <Button style={{padding:'9px',backgroundColor:'#323662',color:'#1EC1C3'}}onClick={toggle}>
                      Transfer >
                    </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                      
                      <ModalBody style={{backgroundColor:'#2B2F55',color:white}}>
                        <Row>
                          <Col>
                          <h4>Transfer</h4>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            Transfer to
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                          <input onChange={(e)=>{setsentEmail(e.target.value)}} placeholder='Enter Email Adress' style={{backgroundColor:'#2D325A',marginTop:'2%'}}></input>   
                          </Col>
                        </Row>
                       
                      </ModalBody>
                      <ModalFooter  style={{backgroundColor:'#292D52',color:white}}>
                        <Button color="primary" onClick={()=>{toggle(); 
                          setNotifications([...notifications,{email:sentEmail,date:new Date()}])
                        }}>Submit</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                   </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{margin:'2%'}}>
          <Col md='12'>
          <Card style={{backgroundColor:'#2B2F55',color:white}}>
              <Card.Body>
                <Row>
                  <Col md='4'>
                    <LaptopIcon />
                    <br>
                    </br>
                    Desktop App
                  </Col>
                  <Col>
                  
                  <Row>
                    <Col>
                      <Button style={{backgroundColor:'#1EC1C3', width:"100%",margin:'2%'}}>
                        <LaptopWindowsIcon/> Download for windows 
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <Button style={{backgroundColor:'#1EC1C3', margin:'2%', width:"100%"}}>
                        <LaptopMacIcon/> Download for Mac os 
                      </Button>  
                    </Col>
                  
                  </Row>
                  </Col>
                 
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       </Col>
        
      </Row>
    </div>
  );
}

export default App;

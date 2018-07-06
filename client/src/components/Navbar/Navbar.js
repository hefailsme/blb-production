import React from 'react';
import { Row, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css'

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}


render() {

    return (
          <div>
          <Router>
              <Row>
            <Navbar color="black" dark expand="md" scrolling fixed="top">
            <NavbarBrand href="/home" onClick="/home">
                <img src={require('../../assets/images/BLB_Bulb_Final.png')} alt="bl-bulb" height="30"/>   
            </NavbarBrand>
            <NavbarBrand href="/home" onClick="/home">
                <img src={require('../../assets/images/BLB_TypeOnly_Blk.png')} alt="bl-type-blk" height="30"/>   
            </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick={ this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                      <NavItem>
                          <NavLink to ="/home" onClick="/home">HOME</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to ="/episode" onClick="/episode">EPISODES</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to ="/blog" onClick="/blog">STUDIO BLOG</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to ="/engineer" onClick="/engineer">OUR ENGINEERS</NavLink>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                      <NavItem>
                        <NavLink to="https://www.youtube.com/user/sightthesiren/featured" target="_blank" onClick="https://www.youtube.com/user/sightthesiren/featured"><Fa icon="youtube"/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="http://instagram.com/brightlightsbasement" target="_blank" onClick="http://instagram.com/brightlightsbasement"><Fa icon="instagram"/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="http://facebook.com/brightlightsbasement" target="_blank" onClick="http://facebook.com/brightlightsbasement"><Fa icon="facebook"/></NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="http://twitter.com/basementbright" target="_blank" onClick="http://twitter.com/basementbright"><Fa icon="twitter"/></NavLink>
                      </NavItem>
                    </NavbarNav>
            </Collapse>
            </Navbar>
            </Row>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;
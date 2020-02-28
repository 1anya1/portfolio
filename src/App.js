import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import Footer from './Footer'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from 'styled-components';

const links = [
  { href: '/', text: 'Home' },
  { href: 'projects', text: 'Projects' },
  { href: 'resume', text: 'Resume' },
  
  
  
  
];
const createNavItem = ({ href, text}) => (
  <NavItem>
    <NavLink href={href}  style={{fontSize: 18, color:'white', textAlign: 'center', padding: 10}}>{text}</NavLink>
  </NavItem>
);



 class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
   render() {
    

  return (
    <div>
      <Navbar className="text-info" color="black" style={{backgroundColor: 'black', padding:'20px 40px 0'}} light expand="lg">
          <NavbarBrand href="/"><img className='logo' style={{width: 70}} src='https://i.imgur.com/daKEcUA.png'></img></NavbarBrand>
          <NavbarToggler className='toggler' onClick={this.toggle}  style={{backgroundImage: 'linear-gradient(to right top, #7b7b7b, #9a9a9a, #bbbbbb, #dcdcdc, #ffffff)', color:'black'}}/>
          <Collapse  isOpen={this.state.isOpen} navbar>
            <Nav style={{backgroundColor: 'black'}}
            className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
    <Router>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      
    </Router>
    <Footer />
    </div>
    );
  }
}

 export default App



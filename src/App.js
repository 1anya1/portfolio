import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import { slide as Menu } from 'react-burger-menu'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '/', text: 'Home' },
  { href: 'projects', text: 'Projects' },
  { href: 'resume', text: 'Resume' },
  
  
  
  
];
const createNavItem = ({ href, text}) => (
  <NavItem>
    <NavLink href={href} className="text-info" style={{fontSize: 18, fontWeight: 'bold'}}>{text}</NavLink>
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
      <Navbar className="text-info" color="white" light expand="md">
          <NavbarBrand href="/"><img className='logo' style={{width: 200}} src=''></img></NavbarBrand>
          <NavbarToggler  onClick={this.toggle} />
          <Collapse  isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
    </div>
    );
  }
}

 export default App



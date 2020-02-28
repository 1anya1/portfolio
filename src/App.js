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

const links = [
  { href: '/', text: 'Home' },
  { href: 'projects', text: 'Projects' },
  { href: 'resume', text: 'Resume' },
  
  
  
  
];
const createNavItem = ({ href, text}) => (
  <NavItem key={text}>
    <NavLink href={href}  style={{fontSize: 21, color:'white', textAlign: 'center', padding: 20}}>{text}</NavLink>
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
      <Navbar className="text-info" color="black" style={{backgroundColor: 'black', padding:'20px 40px 0'}}  expand="lg">
          <NavbarBrand href="/"><img className='logo' style={{width: 70}}  alt= '' src='https://i.imgur.com/daKEcUA.png'></img></NavbarBrand>
          <NavbarToggler className='navbar-dark' onClick={this.toggle}  style={{ backgroundColor: 'black', outlineStyle:'none', border: 'white .5px solid'}}/>
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



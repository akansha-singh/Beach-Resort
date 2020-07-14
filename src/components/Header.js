import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

export class Header extends Component {

    constructor(props) {
        super(props);
     
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
      }

    toggleNav() {
       this.setState({
          isNavOpen: !this.state.isNavOpen
       });
    }


    render() {
        return (
            <div>
                <Navbar color="white" light expand="lg" className="nav-bar" style={{marginBottom:'30px'}}>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
              <img
                src={logo}
                height="29px"
                width="153px"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" >
                            <NavItem className="nav-items">
                                <NavLink color="dark" className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-items">
                                <NavLink className="nav-link" to='/rooms'>Rooms</NavLink>
                            </NavItem>
                            </Nav>                           
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header

import React, { Component } from "react";
import style from "./component.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

class NavBar extends Component {
  state = {
    dropdownOpen: false,
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className={style.header}>
        <div>
            
        </div>
      </div>
    );
  }
}

export default NavBar;

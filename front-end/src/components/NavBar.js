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
  Button,
} from "reactstrap";
import logo from "../assets/logo.png";

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
        {/* <div className={style.setHeader}> */}
        <div>
          {/* <img src={logo} /> */}
          <div className={style.logo}></div>
        </div>
        <div>
          <p>coffe from indonesia</p>
        </div>
        <div>
          <Button>shop</Button>
        </div>
        <div>
        <Button>search</Button>
        </div>
        <div>
          <p>your order (0)</p>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default NavBar;

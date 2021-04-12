import React, { Component } from "react";
import style from "./component.module.css";
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  // NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
  // NavbarText,
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

    const buttonColor = {
      color : "white"
    }

    return (
      <div className={style.header}>
        {/* <div className={style.setHeader}> */}
        <div>
          <img src={logo} alt="undifined" style={{width: "70px"}} title="coffe" />
          {/* <div className={style.logo}></div> */} 
        </div>
        {/* <div>
          <p>coffe from indonesia</p>
        </div> */}
        <div>
          <Button color="none" style={buttonColor}>shop</Button>
        </div>
        <div>
        <Button color="none" style={buttonColor}>search</Button>
        </div>
        <div>
          {/* cart order */}
          <p>your order (0)</p> 
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default NavBar;

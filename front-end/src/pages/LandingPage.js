import React, { Component } from "react";
import style from "./page.module.css";
import { NavBar } from "../components";
// import jumbotron from "../assets/landingPage.jpg";

class LandingPage extends Component {
  state = {};
  render() {
    // const imgJumbotron =  {
    //   background-size: "cover";
    // }

    return (
      <div>
        <div className={style.landingPage}>
          <NavBar />
          <div className={style.bigTitle}>
            <p>COFFEMORN</p>
            
          </div>
        </div>
        {/* PAGE */}
        <div>pppp</div>
      </div>
    );
  }
}

export default LandingPage;

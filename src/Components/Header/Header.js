import React, { Component } from "react";
import logo from "../../Assets/john_sombrero.png";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="maestro" />
            <h1>Compra Juegos</h1>
          </div>
        </Link>
        <div className="login">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    );
  }
}

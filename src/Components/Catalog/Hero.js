import React, { Component } from "react";
import "./hero.css";
import axios from "axios";
import swal from "sweetalert2";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password1: "",
      password2: ""
    };
  }
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  async register() {
    const { email, name, password1, password2 } = this.state;
    if (password1 === password2) {
      const res = await axios.post("/auth/register", {
        email,
        name,
        password: password1
      });
      console.log(res);
    } else {
      swal.fire({type:'error' , text:`Passwords Do Not Match!`});
    }
  }

  render() {
    return (
      <div className="hero">
        <div className="hero-img">
          <div className="register">
            <h3>Register Account</h3>
            <input
              type="text"
              placeholder="Email"
              onChange={e => this.handleChange(e, "email")}
              value={this.state.email}
            />
            <input
              type="text"
              placeholder="Name"
              onChange={e => this.handleChange(e, "name")}
              value={this.state.name}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.handleChange(e, "password1")}
              value={this.state.password1}
            />
            <input
              type="password"
              placeholder="Repeat Password"
              onChange={e => this.handleChange(e, "password2")}
              value={this.state.password2}
            />

            <button onClick={() => this.register()}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

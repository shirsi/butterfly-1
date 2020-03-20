import React, { Component } from "react";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      signup: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup() {
    this.setState({
      signup: !this.state.signup
    });
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    try {
      let response = await fetch(this.props.baseURL + "/users", {
        method: "POST",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let data = await response.json();
      this.setState({
        username: this.username,
        password: "",
        signup: true
      });
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div class='sign-in-div'>
          <form class='sign-in' onSubmit={this.handleSubmit}>
          <div class="form-group ">
            <label htmlFor="username">Username</label>
            <input class="form-control" type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username"/>
          </div>
          <div class="form-group ">
            <label htmlFor="password">Password</label>
            <input class="form-control" type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"/>
            <input class="btn btn-primary" type='submit' value='Sign Up'/>
          </div>
          </form>
      </div>
    );
  }
}
export default Signup;

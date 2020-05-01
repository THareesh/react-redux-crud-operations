import React, { Component } from 'react';

class Valid extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      invalidUsername: false,
      userNameError: false,
      passwordError: false,
      isDisplayProfile: false
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.back = this.back.bind(this);
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  submit() {
    this.setState({
      userNameError: false,
      invalidUsername: false,
      passwordError: false
    });
    let isValidEmailOrNot = /(.+)@(.+){2,}\.(.+){2,}/.test(this.state.username);
    if (isValidEmailOrNot && this.state.username && this.state.password) {
      this.setState({ isDisplayProfile: true });
    } else if (!this.state.username) {
      this.setState({ userNameError: true });
    } else if (!isValidEmailOrNot) {
      this.setState({ invalidUsername: true });
    } else {
      this.setState({ passwordError: true });
    }
  }

  back() {
    this.setState({ isDisplayProfile: false });
  }

  render() {
    return (
      <div>
        {!this.state.isDisplayProfile ? <div id="login">
          <div>
            <label>UseName : </label>
            <input type="text" name="username" onChange={this.updateUsername} />
            {this.state.invalidUsername ? <label>Username shoud be in abc@example.com</label> : ''}
            {this.state.userNameError ? <label>Please enter Username</label> : ''}
          </div>
          <div>
            <label>Password : </label>
            <input type="password" name="password" onChange={this.updatePassword} />
            {this.state.passwordError ? <label>Please enter password</label> : ''}
          </div>
          <button onClick={this.submit}>Submit</button>
        </div> : <div id="profile">
            <h1>Welcome {this.state.username}</h1>
            <button onClick={this.back}>Back</button>
          </div>}
      </div>
    );
  }
}

export default Valid;
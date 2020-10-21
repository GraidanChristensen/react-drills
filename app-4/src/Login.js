import React, { Component }from 'react';

class Login extends Component{
  constructor(){
    super();

    this.state ={
        username: "",
        password: ""
    }
  }

  handleUsername(userValue){
    this.setState({
        username: userValue
    })
  }

  handlePassword(userValue){
      this.setState({
          password: userValue
      })
  }

  submitAlert(){
    alert("Username: " + this.state.username + " Password: " + this.state.password)
  }

  render(){
    return(
      <div className='login'>
        <input className="inputField" placeholder="Username" onChange={(e) => this.handleUsername(e.target.value)}/>
        <input className="inputField" placeholder="Password" onChange={(e) => this.handlePassword(e.target.value)}/>
        <button className="loginButton" onClick={() => this.submitAlert()}>Login</button>
      </div>
    )
  }
}

export default Login;

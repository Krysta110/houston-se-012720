import React, {Component} from 'react'

class Login extends Component{

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(userInfo => {
        console.log(userInfo)
        if(userInfo.token){ //check if the key is present or not 
            console.log(userInfo.token)
            // localStorage.setItem("token", userInfo.token)
            localStorage.token = userInfo.token
        }
       
      })
    }

    render(){
        return(
        <div>
             <h2>Login</h2>
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>UserName</label>
            <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default Login



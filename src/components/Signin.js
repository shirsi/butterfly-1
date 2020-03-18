import React, {Component} from 'react'
class Signin extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
      signin: false
    }
    this.handleSignin = this.handleSignin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleSignin = this.toggleSignin.bind(this)
  }
  handleSignin(user){
    this.setState({
      username: user
    })
    console.log(this.state.username)

  }

  toggleSignin(){
    this.setState({
      signin: !this.state.signin
    })
  }

  handleChange(event){
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    })
  }
  async handleSubmit(event){
    event.preventDefault()
    try{
      let response = await fetch(this.props.baseURL + '/sessions',{
        method:'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      console.log(data);
      this.toggleSignin()
      this.handleSignin(data)
      console.log(data)
      this.setState({
        username:'',
        password:'',
      })

    }catch(e){
      console.error(e);
    }
  }
  render(){
    return(
      <div>
      {
        this.state.signin
        ?  <h1>Welcome {this.state.username} !</h1>
        :
        <form onSubmit={
          this.handleSubmit
        }>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password"/>
          <input type='submit' value='sign in'/>
        </form>
      }

      </div>
    )
  }
}
export default Signin

import React, { Component } from 'react';

import axios from 'axios';

import UserCard from './components/UserCard';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      axiosError: '',
      username: 'MaxiCB',
      userData: {},
      userFollowers: [{}]
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/` + this.state.username)
      .then((res) => {
        // console.log(res.data);
        this.setState({userData: res.data});
        axios.get(`https://api.github.com/users/`+ this.state.username + `/followers`)
          .then((res) => {
            // console.log(res.data);
            this.setState({userFollowers: res.data});
          })
          .catch((err) => {
            console.log(err);
            this.setState({axiosError: err});
          })
      })
      .catch((err) => {
        console.log(err);
        this.setState({axiosError: err})
      })
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {/* Implement search form here and pass data back to update the state.
        Need to pass in a function to update state, and also pass in a callback.
        This will allow me to update state and allow the user to decide when to 
        send the get request. */}
        <UserCard userData={this.state.userData} userFollowers={this.state.userFollowers}/>
      </div>
    )
  }
}

export default App;

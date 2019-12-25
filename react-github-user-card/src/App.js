import React, { Component } from 'react';

import axios from 'axios';

import UserCard from './components/UserCard';
import UserSearchForm from './components/UserSearchForm';

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

  fetchUser = () => {
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
  }

  componentDidMount() {
    this.fetchUser();
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.username !== prevState.username) {
      // console.log('dif state');
      // console.log(this.state.username);
      this.fetchUser();
    } 
  }

  searchUpdate = (username) => {
    this.setState({username: username})
    // console.log(this.state.username)
  }

  render() {
    return (
      <div>
        {/* Implement search form here and pass data back to update the state.
        Need to pass in a function to update state, and also pass in a callback.
        This will allow me to update state and allow the user to decide when to 
        send the get request. */}
        <UserSearchForm searchUpdate={this.searchUpdate}/>
        <UserCard userData={this.state.userData} userFollowers={this.state.userFollowers}/>
      </div>
    )
  }
}

export default App;

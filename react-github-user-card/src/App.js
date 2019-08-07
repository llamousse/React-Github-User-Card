import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard.js';
import Followers from './Followers.js';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.fetchUser();
  };

  // handleUserChange = e => {
  //   this.setState({ user: e.target.value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.fetchUser();
  // };

  fetchUser = () => {
    axios.get("https://api.github.com/users/llamousse")
      .then(response => {
        console.log("user data", response.data)
        this.setState({ user: response.data })
        console.log(this.state.user)
      })
      .catch(err => {
        console.log("Error: Something went wrong while loading user.", err);
        this.setState({ user: '' })
        this.setState({ errorMessage: "user not found" })
      })
  }

  render() {
    return (  
      <div>
        <h1>GitHub Finder</h1>
        <h2>User:</h2>
        <UserCard
          image={this.state.user.avatar_url}
          header={this.state.user.login}
          meta={this.state.user.name}
          description={this.state.user.bio}
          extra={this.state.user.followers}
          followersUrl={this.state.user.login}
        />
        <Followers />
      </div>
    );
  }
}

export default App;

        {/* <h1>GitHub Finder</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Search Users"
            onChange={this.handleUserChange} 
          />
          <button>Search</button>
        </form> */}

        {/* {this.state.user !==
          "User not found" ? (
            this.state.user.map(users => (
              <h1>{users}</h1>
            ))
          ) : (
            <div>User not found</div>
        )}<div>{this.state.errorMessage}</div> */}
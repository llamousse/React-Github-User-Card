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

  fetchUser = () => {
    axios.get("https://api.github.com/users/llamousse")
      .then(response => {
        // console.log("user data", response.data)
        this.setState({ user: response.data });
        // console.log(this.state.user)
      })
      .catch(err => {
        console.log("Error: Something went wrong while loading user.", err);
        this.setState({ user: [] });
        this.setState({ errorMessage: "user not found" });
      })
  }

  render() {
    return (  
      <>
        <div className="App">
          <h1 className="nav">GitHub Finder</h1>
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
        <div className="footer"></div>
      </>
    );
  }
}

export default App;
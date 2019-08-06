import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard.js';

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

  handleUserChange = e => {
    this.setState({ user: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchUser();
  };

  fetchUser = () => {
    axios.get("https://api.github.com/users/llamousse")
      .then(response => {
        console.log("user data", response.data)
        this.setState({ user: response.data })
        console.log(this.state.user)
      })
      // .then(response => {
      //   this.setState({ user: response.data.login })
      // })
      .catch(err => {
        console.log("Error: Something went wrong", err);
        this.setState({ user: '' })
        this.setState({ errorMessage: "user not found" })
      })
  }

  render() {
    return (       
      <UserCard
        image={this.state.user.avatar_url}
        header={this.state.user.login}
        meta={this.state.user.name}
        description={this.state.user.bio}
        extra={this.state.user.followers}
        followersUrl={this.state.user.login}
      />
    );
  }
}

export default App;
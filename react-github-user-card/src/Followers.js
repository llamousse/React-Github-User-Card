import React from 'react';
import axios from 'axios';
import FollowersCard from './components/FollowersCard.js';

class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followersArray: [],
            followerData: [],
            errMessage: ''
        };
    }

    componentDidMount() {
        this.fetchFollowers();
    }

    fetchFollowers = () => {
        axios.get("https://api.github.com/users/llamousse/followers")
            .then(response => {
                const followersArr = response.data;
                // console.log("followers data (array of objects): ", response.data);
                followersArr.forEach(followerArr => {
                    this.state.followersArray.push(followerArr.login);
                })
                // followersArray gets an array of follower names

                this.state.followersArray.forEach(follower => {
                    axios.get(`https://api.github.com/users/${follower}`)
                        .then(response => {
                            this.setState({ followerData: [...this.state.followerData, response.data] });
                            // console.log(this.state.followerData);
                        })
                        .catch(err => {
                            console.log("Error: Something went wrong.", err);
                            this.setState({ followerData: [] });
                            this.setState({ errMessage: "Followers not found." });
                        })
                })
                // fetches each follower info from GitHub API & saves to followerData
            })
            .catch(err => {
                // console.log("Error: Something went wrong while loading followers.", err);
                this.setState({ followersArray: [] });
                this.setState({ followerData: [] });
                this.setState({ errMessage: "Followers not found." });
            })
    }

    render() {
        return (
            <div>
                <h2>Followers:</h2>
                {this.state.followerData.map((follower) => (
                    <FollowersCard
                        image={follower.avatar_url}
                        header={follower.login}
                        meta={follower.name}
                        description={follower.bio}
                        extra={follower.followers}
                        followersUrl={follower.login}
                    />
                ))}
            </div>
        );
    }
}

export default Followers;
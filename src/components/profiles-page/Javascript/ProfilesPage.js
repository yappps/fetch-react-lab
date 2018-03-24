import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.getMoreUsers = this.getMoreUsers.bind(this);
  }

  handleScroll(event) {
    event.preventDefault();
    this.getMoreUsers();
  }
  getMoreUsers(number = 8) {
    return fetch("https://randomuser.me/api?results=" + number)
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data =>
        this.setState({
          profiles: this.state.profiles.concat(data)
        })
      );
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=9")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }

  render() {
    const displayProfiles = this.state.profiles.map(
      (individualProfile, index) => {
        return (
          <ProfileCard
            id="index"
            key={index}
            individualData={individualProfile}
          />
        );
      }
    );
    return (
      <div className="Profiles">
        {displayProfiles}
        <p onScroll={this.handleScroll}>Getting more user profiles</p>
      </div>
    );
  }
}

export default ProfilesPage;

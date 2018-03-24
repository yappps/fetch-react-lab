import React, { Component } from "react";
import ProfileCard from "./ProfileCard";
class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=9")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
  }

  render() {
    return this.state.profiles.map((individualProfile, index) => {
      return <ProfileCard id="index" key={index} individualData={individualProfile} />;
      // return <li key={index}><ProfileCard/></li>;
    });
  }
}

export default ProfilesPage;

import React, { Component } from "react";

class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=3")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
  }

  render() {
    return this.state.profiles.map((profile, i) => {
      return <li key={i}>{profile.name.first}</li>;
    });
  }
}

export default ProfilesPage;

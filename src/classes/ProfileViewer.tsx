import React, { Component } from "react";
import { ProfileViewerProps } from "../model/ProfileViewer.model";

class ProfileViewerState {
  profile: any;
}

class ProfileViewer extends Component<ProfileViewerProps, ProfileViewerState> {
  constructor(props: ProfileViewerProps) {
    super(props);
    this.state = { profile: undefined };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(response => response.json())
      .then(profile => this.setState({ profile }));
  }

  render() {
    const { profile } = this.state;
    return profile ? (
      <>
        <h3>{profile.name}</h3>
        <h4>{profile.location}</h4>
        <p>
          <a href={profile.blog}>blog</a>
        </p>
        <img alt="avatar" src={profile.avatar_url} height="200px" />
      </>
    ) : (
      <h4>Loading...</h4>
    );
  }
}

export default ProfileViewer;

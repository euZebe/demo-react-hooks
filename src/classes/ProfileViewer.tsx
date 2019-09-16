import React, { Component } from "react";
import {
  ProfileViewerProps,
  GithubProfile
} from "../model/ProfileViewer.model";

class ProfileViewer extends Component<GithubProfile> {
  render() {
    const { profile } = this.props;
    return (
      <>
        <h3>{profile.name}</h3>
        <h4>{profile.location}</h4>
        <p>
          <a href={profile.blog}>blog</a>
        </p>
        <img alt="avatar" src={profile.avatar_url} height="200px" />
      </>
    );
  }
}

export default ProfileViewer;

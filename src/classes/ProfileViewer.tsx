import React, { Component } from "react";
import { ProfileViewerProps } from "../model/ProfileViewer.model";
import GithubProfileRenderProp from "./GithubProfileRenderProp";

class ProfileViewer extends Component<ProfileViewerProps> {
  render() {
    const { username } = this.props;
    return (
      <GithubProfileRenderProp username={username}>
        {(profile: any) => (
          <>
            <h3>{profile.name}</h3>
            <h4>{profile.location}</h4>
            <p>
              <a href={profile.blog}>blog</a>
            </p>
            <img alt="avatar" src={profile.avatar_url} height="200px" />
          </>
        )}
      </GithubProfileRenderProp>
    );
  }
}

export default ProfileViewer;

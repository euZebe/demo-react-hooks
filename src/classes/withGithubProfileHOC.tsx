import React from "react";
import {
  ProfileViewerProps,
  GithubProfile
} from "../model/ProfileViewer.model";
import ProfileViewerAsClass from "./ProfileViewer";

function withGithubProfileHOC(WrappedComponent: React.Component) {
  class WrapperComponent extends React.Component<
    ProfileViewerProps,
    GithubProfile
  > {
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
          <h2>with HOC</h2>
          <ProfileViewerAsClass profile={profile} />
        </>
      ) : (
        <h4>Loading...</h4>
      );
    }
  }
  return WrapperComponent;
}

export default withGithubProfileHOC;

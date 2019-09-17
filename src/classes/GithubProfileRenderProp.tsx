import React from "react";
import {
  GithubProfile,
  ProfileViewerProps
} from "../model/ProfileViewer.model";

type Props = ProfileViewerProps & {
  children: (profile: GithubProfile) => any;
};

class GithubProfileRenderProp extends React.Component<Props, GithubProfile> {
  constructor(props: Props) {
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
      <div>
        <h2>with render prop</h2>
        {this.props.children(profile)}
      </div>
    ) : (
      <h4>Loading...</h4>
    );
  }
}

export default GithubProfileRenderProp;

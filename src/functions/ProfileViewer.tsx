import React from "react";
import { GithubProfile } from "../model/ProfileViewer.model";

const ProfileViewer = ({ profile }: GithubProfile) => {
  return (
    <>
      <h2>functional component</h2>
      <h3>{profile.name}</h3>
      <h4>{profile.location}</h4>
      <p>
        <a href={profile.blog}>blog</a>
      </p>
      <img alt="avatar" src={profile.avatar_url} height="200px" />
    </>
  );
};

export default ProfileViewer;

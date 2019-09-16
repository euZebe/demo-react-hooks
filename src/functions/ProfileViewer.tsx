import React, { useEffect, useState } from "react";
import { ProfileViewerProps } from "../model/ProfileViewer.model";

const ProfileViewer = ({ username }: ProfileViewerProps) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(setProfile);
  }, []);

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
};

export default ProfileViewer;

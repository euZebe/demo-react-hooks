import React, { useEffect, useState } from "react";
import {
  GithubProfile,
  ProfileViewerProps
} from "../model/ProfileViewer.model";
import ProfileViewer from "./ProfileViewer";

// declare a custom hook
function useGithubProfile(username: string) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(setProfile);
  }, []);

  return profile;
}

const ProfileLoaderContainer = ({ username }: ProfileViewerProps) => {
  const profile = useGithubProfile(username);

  return profile ? <ProfileViewer profile={profile} /> : <h4>Loading...</h4>;
};

export default ProfileLoaderContainer;

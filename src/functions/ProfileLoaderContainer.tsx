import React, { useEffect, useState } from "react";
import { ProfileViewerProps } from "../model/ProfileViewer.model";
import ProfileViewer from "./ProfileViewer";

// declare a custom hook
export function useGithubProfile(username: string) {
  const [profile, setProfile] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        setLoading(false);
        return response.json();
      })
      .then(setProfile)
      .catch(error => {
        console.error("an error occured while fetching user details", error);
        setError(error.message);
        setLoading(false);
      });
  }, [username]);

  return [profile, loading, error];
}

const ProfileLoaderContainer = ({ username }: ProfileViewerProps) => {
  const [profile, loading, error] = useGithubProfile(username);

  if (error)
    return (
      <div className="error">
        <h5>An error occured while fetching profile {username}</h5>
        <p>{error}</p>
      </div>
    );

  if (loading) return <h4>Loading...</h4>;
  return profile ? <ProfileViewer profile={profile} /> : null;
};

export default ProfileLoaderContainer;

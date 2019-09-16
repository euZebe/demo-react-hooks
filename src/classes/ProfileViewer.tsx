import React from "react";

const profile = {
  name: "Kent C. Dodds",
  blog: "https://kentcdodds.com",
  location: "Salt Lake City, Utah, USA",
  avatar_url: "https://avatars0.githubusercontent.com/u/1500684?v=1"
};

const ProfileViewer = () => (
  <>
    <h3>{profile.name}</h3>
    <h4>{profile.location}</h4>
    <p>
      <a href={profile.blog}>blog</a>
    </p>
    <img src={profile.avatar_url} height="200px" />
  </>
);

export default ProfileViewer;

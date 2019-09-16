import React from "react";
import PresentationalProfileViewerAsClass from "./classes/ProfileViewer";
import ProfileViewerAsFunction from "./functions/ProfileViewer";
import withGithubProfileHOC from "./classes/withGithubProfileHOC";

const ProfileViewerAsClass = withGithubProfileHOC(
  // @ts-ignore
  PresentationalProfileViewerAsClass
);

const App: React.FC = () => {
  return (
    <>
      <ProfileViewerAsClass username="kentcdodds" />
      <ProfileViewerAsFunction username="kentcdodds" />
    </>
  );
};

export default App;

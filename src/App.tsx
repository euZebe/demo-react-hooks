import React from "react";
import ProfileViewerAsClass from "./classes/ProfileViewer";
import ProfileViewerAsFunction from "./functions/ProfileLoaderContainer";

const App: React.FC = () => {
  return (
    <>
      <ProfileViewerAsClass username="kentcdodds" />
      <ProfileViewerAsFunction username="kentcdodds" />
    </>
  );
};

export default App;

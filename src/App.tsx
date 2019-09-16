import React from "react";
import ProfileViewerAsClass from "./classes/ProfileViewer";
import ProfileViewerAsFunction from "./functions/ProfileViewer";

const App: React.FC = () => {
  return (
    <>
      <ProfileViewerAsClass username="kentcdodds" />
      <ProfileViewerAsFunction username="kentcdodds" />
    </>
  );
};

export default App;

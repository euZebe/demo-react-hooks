import React from "react";
import ProfileViewerAsClass from "./classes/ProfileViewer";
import ProfileViewerAsFunction from "./functions/ProfileViewer";

const App: React.FC = () => {
  return (
    <div>
      <ProfileViewerAsClass username="kentcdodds" />
      <ProfileViewerAsFunction username="kentcdodds" />
    </div>
  );
};

export default App;

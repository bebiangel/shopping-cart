import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const CirlceProgress = ({ children }) => {
  return (
    <div>
      <CircularProgress />
      {children}
    </div>
  );
};

export default CirlceProgress;

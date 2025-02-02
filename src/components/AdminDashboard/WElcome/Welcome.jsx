import React, { useContext } from "react";
import Context from "../../../Context/DashboardContext";

const Welcome = () => {
  const { mode } = useContext(Context);
  return (
    <div>
      <h4
        className={`header-beforeAdmin ${mode === "dark-mode" && "text-white"}`}
      >
        Welcome Home
      </h4>
    </div>
  );
};

export default Welcome;

import React, { useState } from "react";
import Spinner from "../../spinner/Spinner";
import Tick from "../../spinner/Tick";
import "./overlay.css";
const ChartsOverlay = () => {
  const [isSelected, setIsSelected] = useState({
    spinner: false,
    tick: true,
    selected: false,
  });
  const handleSelection = () => {
    setIsSelected({
      selected: true,
      tick: false,
      spinner: true,
    });

    setTimeout(() => {
      setIsSelected({ ...isSelected, spinner: false, tick: true });
    }, 2000);
  };
  return (
    <>
      <button
        onClick={handleSelection}
        className="tick-dark d-flex justify-content-center align-items-center"
      >
        {isSelected.spinner && <Spinner />}
        {isSelected.tick && <Tick />}
      </button>
    </>
  );
};

export default ChartsOverlay;

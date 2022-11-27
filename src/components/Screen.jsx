import React, { useContext } from "react";
import { Textfit } from "react-textfit";
import { CalContex } from "./store/store";

const Screen = () => {
  const [cal, setCal] = useContext(CalContex);

  return (
    <div>
      <p className="history">{cal.all}</p>
      <Textfit className="screen" max={70} mode="single">
        {cal.num ? cal.num : cal.res}
      </Textfit>
    </div>
  );
};

export default Screen;

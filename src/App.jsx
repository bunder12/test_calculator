import React from "react";
import BtnBox from "./components/BtnBox";
import Button from "./components/Button";
import Screen from "./components/screen";
import Store from "./components/store/store";

const App = () => {
  const btnValue = [
    ["CLEAR", "X"],
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "/"],
    ["%", 0, ".", "="],
  ];

  return (
    <Store>
      <div className="area">
        <div className="card">
          <Screen />
          <div className="border" />
          <BtnBox>
            {btnValue.flat().map((res, index) => (
              <Button value={res} key={index} index={index} />
            ))}
          </BtnBox>
        </div>
      </div>
    </Store>
  );
};

export default App;

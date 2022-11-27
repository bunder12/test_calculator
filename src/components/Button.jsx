import React, { useContext } from "react";
import { CalContex } from "./store/store";

const styleName = (btn) => {
  const className = {
    CLEAR: "clear",
    X: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
    ".": "opt",
    "=": "opt",
    "%": "opt",
  };
  return className[btn];
};

const Button = ({ value, index }) => {
  const [cal, setCal] = useContext(CalContex);

  const handleClick = () => {
    const handleReset = () => {
      localStorage.removeItem("all");
      setCal({ sign: "", num: 0, res: 0 });
    };

    const handleOperator = () => {
      localStorage.setItem("all", cal.all + value);

      setCal({
        sign: value,
        res: !cal.res && cal.num ? cal.num : cal.res,
        num: 0,
        all: cal.all + value,
      });
    };

    const handleEquals = () => {
      localStorage.setItem("all", cal.all);
      if (cal.res && cal.num) {
        const math = (a, b, sign) => {
          const result = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            X: (a, b) => a * b,
            "/": (a, b) => a / b,
          };
          return result[sign](a, b);
        };

        setCal({
          res: math(cal.res, cal.num, cal.sign),
          sign: "",
          num: 0,
          all: cal.all,
        });
      }
    };

    const handleNumber = () => {
      const numberString = value.toString();

      let numberValue;
      if (numberString === "0" && cal.num === 0) {
        numberValue = "0";
      } else {
        numberValue = Number(cal.num + numberString);
      }

      const all = localStorage.getItem("all");

      setCal({
        ...cal,
        num: numberValue,
        all: all + numberValue,
      });
    };

    const handlePersen = () => {
      setCal({
        num: cal.num / 100,
        res: cal.res / 100,
        sign: "",
      });
    };

    const handleKoma = () => {
      setCal({
        ...cal,
        num: !cal.num.toString().includes(".") ? cal.num + value : cal.num,
      });
    };

    const oparation = {
      CLEAR: handleReset,
      X: handleOperator,
      "+": handleOperator,
      "-": handleOperator,
      "/": handleOperator,
      "=": handleEquals,
      "%": handlePersen,
      ".": handleKoma,
    };
    oparation[value] ? oparation[value]() : handleNumber();
  };

  return (
    <button onClick={() => handleClick()} className={`${styleName(value)} btn`}>
      {value}
    </button>
  );
};

export default Button;

import React, { useState } from "react";

export default function Calculator() {
  const [operator, setOperator] = useState("");

  const result = () => {};

  const handleClick = (e) => {
    setOperator(e.target.name);
    console.log(e.target.name);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="input-boxes">
          <input type="number" />
          <input type="text" className="operator" value={operator} />
          <input type="number" />
        </div>
        <div className="operation-btn">
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="/" onClick={handleClick}>
            &divide;
          </button>
        </div>
        <button onClick={result} className="result-btn">
          Calculate
        </button>
        <form>
          <input type="text" value={result} className="result" />
        </form>
      </div>
      {/* <div className="input-box">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <br />
      <button>Calculate</button>
      <input type="text" /> */}
      {/* <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
          checked
        />
        <label class="custom-control-label" for="customSwitch1">
          Toggle this switch element
        </label>
      </div> */}
    </React.Fragment>
  );
}

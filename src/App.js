import React, { useState } from "react";
import "./styles.css";

function renkDegis(Sayı) {
  if (Sayı > 150) {
    return "Green";
  }
  return "Red";
}

const Paragraphs = (props) => {
  return (
    <div>
      <p className={"Red"}>
        you {props.text} {props.data.count} times
      </p>
      <p className={"Red"}>
        you {props.text} {props.data.count2} times
      </p>
      <p className={renkDegis(props.data.count3)}>
        you {props.text} {props.data.count3} times{" "}
      </p>
    </div>
  );
};

const Example = () => {
  const [allValues, setAllValues] = useState({
    count: 0,
    count2: 0,
    count3: 0
  });
  const [input, setInput] = useState("");
  const [fieldText, setFieldText] = useState("clicked");

  return (
    <div>
      <label>
        Names:
        <input
          value={input}
          onInput={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          name="name"
        />
        <br />
        <br />
      </label>

      <input
        type="submit"
        value="Submit"
        onClick={() => {
          setFieldText(input);
        }}
      />

      <Paragraphs data={allValues} text={fieldText}></Paragraphs>
      <button
        onClick={() => {
          const { count, count2, count3 } = allValues;
          setAllValues({
            count: count + 1,
            count2: count2 + 2,
            count3: count3 + 10
          });
        }}
      >
        Click me
      </button>

      <button
        onClick={() => {
          setAllValues({
            count: 0,
            count2: 0,
            count3: 0
          });
        }}
      >
        Reset
      </button>
      {allValues.count3 > 20 && <p>Artık resetlemenin zamanı geldi.</p>}
    </div>
  );
};

export default function App() {
  return <Example />;
}

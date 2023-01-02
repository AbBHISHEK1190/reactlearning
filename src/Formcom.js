import React, { useState } from "react";
function Formcom() {
  const [name, setName] = useState("");
  const [choice, setChoice] = useState("");
  const [check, setCheck] = useState(false);
  function getformdata(e) {
    e.preventDefault();
    console.log(name, choice, check);
  }
  return (
    <div>
      <form onSubmit={getformdata}>
        <input
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <select onChange={(e) => setChoice(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>Dc</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formcom;

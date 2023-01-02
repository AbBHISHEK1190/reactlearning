import React, { useState } from "react";

function Users() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState("anil");
  function updatedata() {
    setData("abhi");
    setData("abhi12");
    // alert(setData);
  }
  return (
    <div className="App">
      <h1>Hello user {data}</h1>
      <p>You clicked {count} times</p>

      <button onClick={updatedata}>click me</button>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

// function Users() {
//   const [data, setData] = useState("abhi");
//   function updateData() {
//     setData("name");
//   }
//   console.warn("______");
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   );
// }

function Abhi(props) {
  function showalert(a) {
    alert(a);
  }
  return (
    <div className="App">
      <h1>props {props.name}</h1>
      <h1>Hello abhi</h1>
      {/* <button onClick={showalert}>click me</button> */}
      <button onClick={() => showalert("123")}>click me</button>
    </div>
  );
}
// export default Users;
export { Users, Abhi };

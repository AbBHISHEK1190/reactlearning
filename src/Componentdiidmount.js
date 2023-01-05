import React from "react";

export class Componentdiidmount extends React.Component {
  constructor() {
    super();
    this.state = { name: "abhishek" };
  }
  componentDidMount() {
    console.warn("componentdidmount");
  }
  render() {
    // console.warn("render");
    // it will call autpomattically when state call here
    // this.setState({ name: "pintu" });
    return (
      <div>
        <h1 style={{ color: "red" }}>Component Did Mount {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "pintu" })}>Update</button>
      </div>
    );
  }
}
// export default Componentdidmount;

import React from "react";

export class ComponenetDidupdatesss extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  componentDidUpdate(preProps, preState, snapShot) {
    console.warn("componentdidmount123", preState);
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  render() {
    // console.warn("render");
    // it will call autpomattically when state call here
    // this.setState({ name: "pintu" });
    return (
      <div>
        <h1 style={{ color: "red" }}>Component Did Mount {this.state.count}</h1>
        {/* <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update
        </button> */}
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
// export default Componentdidmount;

import React from "react";
import ReactDOM from "react-dom";
import LearningHooks from "./app";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  mouseOverHandler = () => {
    console.log("Class:Mouse has been taped");
  };

  componentDidMount() {
    console.log(`Class:This button has been clicked ${this.state.count} times`);
    document.addEventListener("mouseover", this.mouseOverHandler);
  }
  componentDidUpdate() {
    console.log(`Class:This button has been clicked ${this.state.count} times`);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseover", this.mouseOverHandler);
  }
  render() {
    return (
      <>
        <h1>Introduction to Hooks</h1>
        <h5>Traditional Way v/s Hooks</h5>
        <button onClick={this.handleClick}>
          Clicked on me {this.state.count} times
        </button>
        <LearningHooks />
      </>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

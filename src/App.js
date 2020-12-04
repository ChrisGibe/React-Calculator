import React, { Component } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import CalculOperation from "./calculOperation/CalculOperation";

import "./styles/App.css";
import "./styles/Styles.css";
import "./styles/Button.css";
import "./styles/Display.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.currentDisplayValue = 0;
    this.isNextNumber = false;
    this.currentOperation = null;
    this.calculateCommand = new CalculOperation();
    this.state = {
      data: 0,
    };
  }
  /**
   * This method executes the calculate method by sending the value of the clicked
   * button as an argument and the sets the state with the resultant value
   *
   * @param value - value of the button clicked
   *
   */
  clickedHandler = (value) => {
    let calculatedValue = this.calculateCommand.calculate(value, this.state.data);
    this.setState(() => ({
      data: calculatedValue,
    }));
  };

  /**
   * This method calculates and returns the final value based on the buttons clicked
   *
   * @param item - each item contained in the array
   * @param index - index of the item
   *
   * @return NumBtn component with appropriate rendered values
   */
  createButtons = (item, index) => {
    return <Button key={index} label={item} clickedHandler={this.clickedHandler} />;
  };

  /**
   * This method calculates and returns the final value based on the buttons clicked
   *
   * @param arr - array of button values
   *
   * @return div - containing buttons with appropriate values
   */
  createDivs = (arr) => {
    return <div>{arr.map(this.createButtons)}</div>;
  };

  render() {
    return (
      <div className="App">
        <div className="calc-body">
        <header className="App-header">Calculator in ReactJs</header>
          <Display value={this.state.data} />
          {this.createDivs(["1", "2", "3", "+"])}
          {this.createDivs(["4", "5", "6", "-"])}
          {this.createDivs(["7", "8", "9", "*"])}
          {this.createDivs([".", "0", "=", "/"])}
          {this.createDivs(["C"])}
        </div>
      </div>
    );
  }
}

export default App;

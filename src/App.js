import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Action from "./Components/Action";
import Options from "./Components/Options";
import Option from "./Components/Option";
import AddOption from "./Components/AddOption";

class App extends Component {
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
      //if both options are not equal, return true and keep option else
      // return false and delete the option
    }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const decison = this.state.options[randomNumber];
    alert(decison);
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter a valid item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "That option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");

      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      //console.log("saving");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  render() {
    const title = "Planner";
    const subtitle = "put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;

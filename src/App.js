import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import Option from "./Option";
import AddOption from "./AddOption";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
      //if both options are not equal, return true and keep option else
      // return false and delete the option
    }));
  }
  componentDidMount() {
    try{
      const json = localStorage.getItem("options");

      const options = JSON.parse(json);
      if(options){
      this.setState(() => ({ options }));
      }
    }catch(e){

    }
   
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      //console.log("saving");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const decison = this.state.options[randomNumber];
    alert(decison);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter a valid item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "That option already exists";
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
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
App.defaultProps = {
  options: ["Demo item"]
};

export default App;

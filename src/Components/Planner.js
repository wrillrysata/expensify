import React, { Component } from "react";
//import "../App.css";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import Option from "./Option";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class Planner extends Component {
  state = {
    options: [],
    selectedOption:undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleCloseModal = () => {
   // alert('closing');
    this.setState(() => ({ selectedOption: undefined }));
  }
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
    this.setState(() => ({ selectedOption: decison }))
    
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
        <div className="container">
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
        <OptionModal selectedOption = {this.state.selectedOption} handleCloseModal ={this.handleCloseModal} />
      </div>
    );
  }
}

export default Planner;

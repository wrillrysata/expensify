import React, { Component } from "react";
//import "../App.css";

class AddOption extends Component {
  state = {
    error: undefined
  }
  /** 
  constructor(props) {
    super(props);
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  **/
  handleSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if(!error){
        e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
          <br />
        </form>
      </div>
    );
  }
}
export default AddOption;

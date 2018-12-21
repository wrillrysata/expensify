import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends Component {
constructor(props){
  super(props)


  this.state = {
    description:props.expense?props.expense.description:'',
    note:props.expense?props.expense.note:'',
    amount:props.expense?(props.expense.amount/100).toString():'',
    createdAt:props.expense? moment(props.expense.createdAt):moment(),
    calendarFocused:false,
    error:''
  }
}
  
  onDescriptionChange = (e) =>{
    const description  = e.target.value;
    this.setState(() => ({description})

    )}
    onNoteChange = (e) => {
      const note  = e.target.value;
      this.setState(() => ({note})
      )}
      onAmountChange = (e) => {
        const amount = e.target.value;
        
      if(!amount || amount.match(/^\d{1,}(\.\d{0, 2})?$/)){
        this.setState(() => { amount })
      }

      }
     onSubmit= (e) => {
       e.preventDefault()
       if(!this.state.description|| this.state.amount){
        this.setState(()=> ({error:'Please fill in amount and description'}))}

     else{
      this.setState(()=> ({error:''}))}
      this.props.onSubmit({
        description:this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note:this.state.note,
        createdAt:this.state.createdAt.valueOf()
        
      })
     }
      onDateChange = (createdAt)=>{
       if(createdAt) {this.setState(()=> ({createdAt}))}
      }
        
        onFocusChange = ({focused}) => {
          this.setState(()=>({calendarFocused: focused})
          )}
  render() {
   
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit ={this.onSubmit}>
          <input type="text" 
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
          />
          <input type="number"
          placeholder="Amount"
          onChange ={this.onAmountChange}
          />
          <SingleDatePicker
          date={this.state.createdAt}
          onDateChange = {this.onDateChange}
          focused = {this.state.calendarFocused}
          onFocusChange = {this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={()=> false}
           />
          <textarea
          placeholder="Add a note for your expense (optional)"
          onChange={this.onNoteChange}
          value={this.state.note}
          />
          <button>Save Expense </button>
          </form>

        
      </div>
    )
  }
}

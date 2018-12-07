import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";
import selectExpenses from "../selectors/expenses";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select value = { props.filters.sortBy }
      onChange={e => {
        const sortValue = e.target.value;
        sortValue === "date"
          ? props.dispatch(sortByDate())
          : props.dispatch(sortByAmount())
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);
const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

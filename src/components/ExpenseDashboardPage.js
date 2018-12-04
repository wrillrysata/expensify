import React, { Component } from "react";
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
 <ExpenseList />
    </div>

);
export default ExpenseDashboardPage;
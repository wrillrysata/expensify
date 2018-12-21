import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
const ExpenseListItem = ({dispatch, id,description, amount, createdAt}) => (
    <div>
        <Link to = {`/edit/${id}`}>
     <h4>{description}</h4>
     </Link>
     {amount} -  {createdAt}
     

        
    </div>
);
const mapStateToProps = (state) => {
    return {
 expenses:state.expenses
    };
};

export default connect()(ExpenseListItem)

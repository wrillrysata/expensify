import React from 'react';
import { connect } from 'react-redux';
const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
     <h4>{description}</h4>
     {amount} -  {createdAt}

        
    </div>
)


export default ExpenseListItem
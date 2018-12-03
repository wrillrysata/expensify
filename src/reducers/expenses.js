
//import action generator
//import { addExpense }  from '../actions/expenses';
//EXPENSE REDUCER
const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    // Means filter out any object that produces False
    //Filter the expenses objects by id,
    //ideally, always return true
    // but if an id you found matches the one coming from action.id,
    //return false and delete the whole object item
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
      /** 
      case "SORT_BY_AMOUNT":
      return state.map(expense => {
          if(expense.amount === action.amount){
              return expense;

          }
      })**/

    default:
      return state;
  }
};
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
 // console.log(store.getState());
  //console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: "Water bill", amount: 1400, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 0, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "rent bill", amount: 500, createdAt: 300 })
);

// store.dispatch(setTextFilter("gas"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

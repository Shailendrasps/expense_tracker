import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import ExpenseTotal from "./Components/ExpenseTotal";
import Remaining from "./Components/Remaining";
import ExpenseList from "./Components/ExpenseList"; 
import AddExpenseForm from "./Components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = ()=>{
  
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">My Expense Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="col-sm">
          <Remaining/>
        </div>
        <div className="col-sm">
          <ExpenseTotal/>
        </div>
        </div>
        <div className="row mt-3">
        <h3 className="mt-3">Expenses</h3>
        <div className="col-sm">
          <ExpenseList/>
        </div>
        </div>
        <h4 className="mt-3">Add Expense</h4>
        <div className="row">
          <div className="col-sm">
            <AddExpenseForm/>
          </div>
        </div>
    </div>
  </AppProvider>
    );
}
export default App;

import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const AddExpenseForm = ()=>{
    const {dispatch} =useContext(AppContext);
    const [name,setName] = useState('');
    const [cost,setCost] = useState('');
    const onSubmit = (event) =>{
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        setCost('');
        setName('');
    }
    return(
        <form onSubmit ={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for ="name">Name</label>
                    <input type = "text" required = "required" className="form-control" id = "name" value ={name} 
                    onChange = {(event) => setName(event.target.value)}></input>
                </div>
                <div className="col-sm">
                    <label for ="cost">Cost</label>
                    <input type = "text" required = "required" className="form-control" id = "cost" value ={cost}
                    onChange={(event) => setCost(event.target.value)}></input>
                </div>
            </div>
            <div className="col-sm">
                <button className="btn btn-primary mt-3" type = "submit">Save</button>
            </div>
        </form>
    );
}

export default AddExpenseForm;
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from 'react-icons/fc';
import { HiMinusCircle } from 'react-icons/hi';

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    const style = { color: "red"};
    return (
        <tr>
        <td>{props.name}</td>
        <td> { currency }{props.cost}</td>
        <td><FcPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        
        <td><HiMinusCircle size='1.5em' onClick={event=> decreaseAllocation(props.name)} style={style}></HiMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

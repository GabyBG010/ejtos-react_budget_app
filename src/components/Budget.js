import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const increaseBudget = (param) => {

        dispatch({
            type: 'SET_BUDGET',
            payload: budget - 10*(budget-param)
        });

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>

            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        onChange={(event) => increaseBudget(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;

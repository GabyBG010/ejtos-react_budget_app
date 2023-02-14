import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (param) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: param
        });

    }
    return (
        <div className='alert alert-success' >
            <span>Currency:</span>
                <select className="Currency" id="Currency" onChange={(event) => changeCurrency(event.target.value)}>
                <option value="$" name="$ Dollar"> $ Dollar</option>
                <option value="£" name="£ Pound">£ Pound</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Currency;

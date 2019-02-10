import React from 'react';
import { persianNumbers } from '../Utility/Persian';
const PersianYears=({ start, end, onChange, currentYear }) => {
    start=start||1380;
    end=end||1450;
    let years=[];
    for (; start<=end; start++) {
        years.push(<option value={start}>{persianNumbers(start)}</option>);
    }
    return (
        <select name="" value={currentYear} id="persianYear" onChange={onChange} className="form-control">
            {years}
        </select>
    )
}
export default PersianYears;
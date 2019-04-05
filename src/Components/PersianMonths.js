import React from 'react';

const PersianMonths=({ onChange, currentMonth }) => {
    const months={
        1: "فروردین",
        2: "اردیبهشت",
        3: "خرداد",
        4: "تیر",
        5: "مرداد",
        6: "شهریور",
        7: "مهر",
        8: "آبان",
        9: "آذر",
        10: "دی",
        11: "بهمن",
        12: "اسفند"
    };
    const options=Object.keys(months).map(monthNumber => <option value={monthNumber} id={'month-'+monthNumber}>{months[monthNumber]}</option>)
    return (
        <select id="persianMonth" value={currentMonth} className="form-control" onChange={onChange}>
            {options}
        </select>
    );

}

export default PersianMonths;
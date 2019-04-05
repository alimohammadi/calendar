import React, { Component } from 'react';
import Header from './Header';
import Row from './Row';
import Cell from './Cell';
import PersianYears from './PersianYears';
import PersianMonths from './PersianMonths';
import PersianDate from '../Services/PersianDate';
import TodayButton from '../Components/TodayButton';
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.persianDate=new PersianDate();
        this.state={
            year: null,
            month: null
        };
    }
    buildCalendar=(year, month) => {
        let firstDay=this.persianDate.getFirstDayOfMonth(year, month);
        let [currentYear, currentMonth, currentDay]=this.persianDate.getToday();
        let date=1;
        let results=[];
        for (let rows=0; rows<6; rows++) {
            let cells=[];
            for (let column=0; column<7; column++) {
                if (rows===0&&column<firstDay) {
                    cells.push(<Cell></Cell>);
                } else if (date>(month<7? 31:30)) {
                    break;
                }
                else {
                    let classes=[];
                    if (currentYear===parseInt(year)&&currentMonth===parseInt(month)&&currentDay===date) {
                        classes.push("today");
                    }
                    if (column===6) {
                        classes.push("friday");
                    }
                    let classestoString=classes.join(' ');
                    cells.push(<Cell className={classestoString}>{date}</Cell>);
                    date++;
                }
            }
            results.push(<Row cells={cells} />);
        }
        return results;
    }
    updateWithYear=(evt) => {
        if (!evt.target.value) {
            return;
        }
        this.setState({ year: evt.target.value });
    }
    updateWithMonth=(evt) => {
        if (!evt.target.value) {
            return;
        }
        this.setState({ month: evt.target.value });
    }
    goToToday=(evt) => {
        evt.preventDefault();
        let [currentYear, currentMonth,]=this.persianDate.getToday();
        this.setState({ year: currentYear, month: currentMonth });
    }
    render() {
        let [currentYear, currentMonth,]=this.persianDate.getToday();
        let year=this.state.year||this.props.year||currentYear;
        let month=this.state.month||this.props.month||currentMonth;
        let calendarBody=this.buildCalendar(year, month);
        return (
            <React.Fragment>
                <PersianYears onChange={this.updateWithYear} currentYear={year} />
                <PersianMonths onChange={this.updateWithMonth} currentMonth={month} />
                <div className="card">
                    <table className="table table-bordered" id="calendar">
                        <Header />
                        <tbody>
                            {calendarBody}
                        </tbody>
                    </table>
                    <TodayButton onClick={this.goToToday}>امروز</TodayButton>
                </div>
            </React.Fragment>
        );
    }

}
export default Calendar;
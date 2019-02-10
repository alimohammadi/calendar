import { toGregorain, toPersian } from './DateService';
import GregorianDate from './GregorianDate';
class PersianDate {
    constructor() {
        this.gregorianDate=new GregorianDate();
    }
    getFirstDayOfMonth(year, month) {
        let [gregorianYear, gregorianMonth, gregorianDay]=toGregorain(year, month, 1);
        let dayOfWeek=this.gregorianDate.getDayOfWeek(gregorianYear, gregorianMonth-1, gregorianDay);
        return this.getPersianWeekIndexes()[dayOfWeek];
    }
    getToday() {
        let today=new Date();
        return toPersian(today.getFullYear(), today.getMonth()+1, today.getDate());
    }
    getPersianWeekIndexes() {
        return {
            6: 0,
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6
        };
    }
}
export default PersianDate;
class GregorianDate {
    getDayOfWeek(year, month, day) {
        let date=new Date(year, month, day);
        return date.getDay();
    }
    getCurrentDate() {
        let current=new Date();
        return {
            year: current.getFullYear(),
            month: current.getMonth(),
            day: current.getDate()
        };
    }
}
export default GregorianDate;
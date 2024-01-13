function daysInAMonth(month, year) {
    let days = new Date(year, month,0);
    console.log((days.getDate()));
}
daysInAMonth(2,2021)
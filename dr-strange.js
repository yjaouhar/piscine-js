function addWeek(date) {
    const days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
        "secondFriday", "secondSaturday", "secondSunday"
    ];
    const epoch = new Date('0001-01-01');
    const msInDay = 24 * 60 * 60 * 1000;
    const dayIndex = Math.floor((date - epoch) / msInDay);
    return days[dayIndex % 14];


}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);

    return newDate;
}

console.log(addWeek(new Date('2025-08-11')));


export default function buildCalendarLeft(value) {
    const startDay = value.clone().startOf('month').startOf('week').subtract(1, 'day');
    const endDay = value.clone().endOf('month').endOf('week');

    const startDayMonth = value.clone().startOf('month');
    const endDayMonth = value.clone().endOf('month');

    console.log(startDay)

    const day = startDay.clone();

    const calendar = [];
    let daysCounter = 0;

    while(day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, 'day').clone())
        );
    }

    calendar.map((row, x) => {
        row.map((d, y) => {
            if(d.isBefore(startDayMonth)) {
                calendar[x][y] = null;
            }
            if(d.isAfter(endDayMonth)) {
                calendar[x][y] = null;
            }
        })
    })

    return calendar;
}

export function buildCalendarRight(value) {
    const startDay = value.clone().add(1,'month').startOf('month').startOf('week').subtract(1, 'day');
    const endDay = value.clone().add(1,'month').endOf('month').endOf('week');

    const startDayMonth = value.clone().add(1,'month').startOf('month');
    const endDayMonth = value.clone().add(1,'month').endOf('month');

    const day = startDay.clone();
    const calendar = [];

    while(day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, 'day').clone())
        );
    }

    calendar.map((row, x) => {
        row.map((d, y) => {
            if(d.isBefore(startDayMonth)) {
                calendar[x][y] = null;
            }
            if(d.isAfter(endDayMonth)) {
                calendar[x][y] = null;
            }
        })
    })

    console.log("////////////////////////////")
    console.log(calendar)
    console.log("////////////////////////////")
    return calendar;
}

function thisMonth(value) {
    return value.isSame(new Date(), 'month');
}

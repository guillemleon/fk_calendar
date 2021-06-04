import styles from "./Calendar.module.scss";

export function isSelected(day: any, value: any, selectedDays?: any, daysToSelect?: any) {

    if(selectedDays && daysToSelect) {
        for(let i = 0; i < daysToSelect; i++) {
            if(selectedDays && selectedDays[i] && selectedDays[i].isSame(day, 'day')) {
                return true;
            }
        }
    } else {
        return false;
    }
}

export function isSelectedFirst(day: any, value: any, selectedDays: any) {
    if(day !== value && day && selectedDays && selectedDays[0]) {
        return selectedDays[0].isSame(day, 'day');
    } else {
        return false;
    }
}

export function isSelectedLast(value: any, day: any, selectedDays: any) {
    if(day !== value && day && selectedDays && selectedDays[selectedDays.length - 1]) {
        return selectedDays[selectedDays.length - 1].isSame(day, 'day');
    } else {
        return false;
    }
}

export function beforeToday(day: any) {
    return day.isBefore(new Date(), 'day')
}

export function isToday(day: any) {
    return day.isSame(new Date(), 'day');
}

export function dayStyles(day: any, value: any) {
    let style;
    if(beforeToday(day)) style = styles.before;
    if(isSelected(day, value)) style = styles.selectedDay;
    if(isToday(day)) style = styles.today;
    if(isSelected(day, value) && isToday(day)) style = styles.selectedDay;

    return style;
}

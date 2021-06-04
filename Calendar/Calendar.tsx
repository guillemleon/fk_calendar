import React, {useEffect, useState} from 'react';
import styles from './Calendar.module.scss';
import moment from "moment";
import {beforeToday, dayStyles, isSelected, isSelectedFirst, isSelectedLast, isToday} from "./styles";
import CalendarHeader from "./CalendarHeader";
import buildCalendarLeft, {buildCalendarRight} from "./build";
import ButtonDesktop from "../../../../globals/button/Button";

interface IProps {
    valueCalendarLeft: moment.Moment,
    valueCalendarRight: moment.Moment,
    onChangeLeft: any,
    onChangeRight: any,
    mainColor: string,
    strongerMainColor: string,
    colorGradient: string,
    travelDays: number,
    setDays: any
    // any other props that come into the component
}

function Calendar({
                      valueCalendarLeft,
                      valueCalendarRight,
                      onChangeLeft,
                      onChangeRight,
                      mainColor,
                      strongerMainColor,
                      colorGradient,
                      travelDays,
                      setDays
                  }: IProps) {

    const [calendarLeft, setCalendarLeft]: any = useState([]);
    const [calendarRight, setCalendarRight]: any = useState([]);
    const [selectedDays, setSelectedDays]: any = useState([]);

    useEffect(() => {
        setCalendarLeft(buildCalendarLeft(valueCalendarLeft));
        setCalendarRight(buildCalendarRight(valueCalendarRight));
    }, [valueCalendarLeft, valueCalendarRight])

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarLeft}>
                <CalendarHeader
                    isLeftCalendar={true}
                    isRightCalendar={false}
                    mainColor={mainColor}
                    colorGradient={colorGradient}
                    valueLeft={valueCalendarLeft}
                    valueRight={valueCalendarRight}
                    setValueLeft={onChangeLeft}
                    setValueRight={onChangeRight}
                />
                {renderCalendarLeft()}
            </div>
            <div className={styles.calendarRight}>
                <CalendarHeader
                    isLeftCalendar={false}
                    isRightCalendar={true}
                    mainColor={mainColor}
                    colorGradient={colorGradient}
                    valueLeft={valueCalendarRight}
                    valueRight={valueCalendarRight}
                    setValueLeft={onChangeLeft}
                    setValueRight={onChangeRight}
                />
                {renderCalendarRight()}
            </div>
        </div>
    );

    function renderCalendarLeft(): JSX.Element {

        return (
            <div className={styles.calendar}>
                <div className={styles.dayNames}>
                    {
                        ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((d, index) => (
                            <div key={index} className={styles.week}>{d}</div>
                        ))
                    }
                </div>
                {calendarLeft.map((week: any, i: number) => (
                    <div key={i}>
                        {week.map((day: any, index: number) => {
                            if (!day) {
                                return (
                                    <ButtonDesktop
                                        buttonKey={index}
                                        className={styles.day}
                                    >
                                        <div
                                            key={index}
                                            style={{
                                                height: '100%'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    visibility: 'hidden'
                                                }}
                                            >
                                                0
                                            </div>
                                        </div>
                                    </ButtonDesktop>
                                )
                            } else {
                                return (
                                    <ButtonDesktop
                                        buttonKey={index}
                                        className={styles.day}
                                        onClick={() => {
                                            handleDayClickCalendarLeft(day)
                                        }}
                                    >
                                        <div
                                            key={index}
                                            style={{
                                                height: '100%'
                                            }}
                                        >
                                            <div
                                                className={dayStyles(day, valueCalendarLeft)}
                                                style={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: isSelected(day, valueCalendarLeft, selectedDays, travelDays) ? '#FFF' : (beforeToday(day) ? '#b9b9b9' : '#000'),
                                                    backgroundColor:
                                                        isSelected(day, valueCalendarLeft, selectedDays, travelDays) ?
                                                            (isSelectedFirst(day, valueCalendarLeft, selectedDays) ? strongerMainColor : mainColor) :
                                                            (isToday(day) ? '#b9b9b9' : 'transparent'),
                                                    borderTopLeftRadius: isSelectedFirst(day, valueCalendarLeft, selectedDays) || isToday(day) ? 10 : 0,
                                                    borderBottomLeftRadius: isSelectedFirst(day, valueCalendarLeft, selectedDays) || isToday(day) ? 10 : 0,
                                                    borderTopRightRadius: isSelectedLast(valueCalendarLeft, day, selectedDays) || isToday(day) ? (isSelectedFirst(day, valueCalendarLeft, selectedDays) ? 0 : 10) : 0,
                                                    borderBottomRightRadius: isSelectedLast(valueCalendarLeft, day, selectedDays) || isToday(day) ? (isSelectedFirst(day, valueCalendarLeft, selectedDays) ? 0 : 10) : 0
                                                }}
                                            >
                                                {day.format('D').toString()}
                                            </div>
                                        </div>
                                    </ButtonDesktop>
                                )
                            }
                        })}
                    </div>
                ))}
            </div>
        )

    }

    function renderCalendarRight(): JSX.Element {

        return (
            <div className={styles.calendar}>
                <div className={styles.dayNames}>
                    {
                        ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((d, index) => (
                            <div key={index} className={styles.week}>{d}</div>
                        ))
                    }
                </div>
                {calendarRight.map((week: any, i: number) => (
                    <div key={i}>
                        {week.map((day: any, index: number) => {
                            if (!day) {
                                return (
                                    <ButtonDesktop
                                        buttonKey={index}
                                        className={styles.day}
                                    >
                                        <div
                                            key={index}
                                            style={{
                                                height: '100%'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    visibility: 'hidden'
                                                }}
                                            >
                                                0
                                            </div>
                                        </div>
                                    </ButtonDesktop>
                                )
                            } else {
                                return (
                                    <ButtonDesktop
                                        buttonKey={index}
                                        className={styles.day}
                                        onClick={() => {
                                            handleDayClickCalendarRight(day)
                                        }}
                                    >
                                        <div
                                            key={index}
                                            style={{
                                                height: '100%'
                                            }}
                                        >
                                            <div
                                                className={dayStyles(day, valueCalendarRight)}
                                                style={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: isSelected(day, valueCalendarRight, selectedDays, travelDays) ? '#FFF' : (beforeToday(day) ? '#b9b9b9' : '#000'),
                                                    backgroundColor:
                                                        isSelected(day, valueCalendarRight, selectedDays, travelDays) ?
                                                            (isSelectedFirst(day, valueCalendarRight, selectedDays) ? strongerMainColor : mainColor) :
                                                            (isToday(day) ? '#b9b9b9' : 'transparent'),
                                                    borderTopLeftRadius: isSelectedFirst(day, valueCalendarRight, selectedDays) ? 10 : 0,
                                                    borderBottomLeftRadius: isSelectedFirst(day, valueCalendarRight, selectedDays) ? 10 : 0,
                                                    borderTopRightRadius: isSelectedLast(valueCalendarRight, day, selectedDays) ? 10 : 0,
                                                    borderBottomRightRadius: isSelectedLast(valueCalendarRight, day, selectedDays) ? 10 : 0
                                                }}
                                            >
                                                {day.format('D').toString()}
                                            </div>
                                        </div>
                                    </ButtonDesktop>
                                )
                            }
                        })}
                    </div>
                ))}
            </div>
        )

    }

    function handleDayClickCalendarLeft(day: any) {
        if (!beforeToday(day)) {
            setSelectedDays([]);
            onChangeLeft(day);
            selectMultipleDays(day)
        }
    }

    function handleDayClickCalendarRight(day: any) {
        if (!beforeToday(day)) {
            setSelectedDays([]);
            selectMultipleDays(day)
        }
    }

    function selectMultipleDays(day: any) {
        let sDays = [];
        let d = day.clone();

        for (let i = 0; i < travelDays; i++) {
            let oneDayMore = i === 0 || i === 1 ? i : 1;
            sDays.push(d.add(oneDayMore, 'day').clone());
        }

        setSelectedDays(sDays);
        setDays(sDays)

    }

}

export default Calendar;

import React from 'react';
import styles from './Calendar.module.scss';

import chevronRight from '../../../../../../app/assets/icons/chevronRight.png';
import chevronLeft from '../../../../../../app/assets/icons/chevronLeft.png';
import Button_Desktop from '../../../../globals/button/Button';

export default class CalendarHeader extends React.Component<{
    valueLeft: any;
    valueRight: any;
    setValueLeft: any;
    setValueRight: any;
    mainColor: any;
    colorGradient: string;
    isLeftCalendar: boolean;
    isRightCalendar: boolean;
}> {
    render() {
        let {
            valueLeft,
            valueRight,
            setValueLeft,
            setValueRight,
            mainColor,
            colorGradient,
            isLeftCalendar,
            isRightCalendar,
        } = this.props;

        return (
            <div
                className={styles.header}
                style={{
                    backgroundColor: '#FFF',
                    justifyContent:
                        isLeftCalendar && !isRightCalendar
                            ? 'flex-start'
                            : 'flex-end',
                }}
            >
                {isLeftCalendar && !isRightCalendar && (
                    <Button_Desktop>
                        <div
                            onClick={() => {
                                !thisMonth() && prevMonth();
                            }}
                            className={styles.previous}
                            style={{
                                background: colorGradient,
                            }}
                        >
                            <img className={styles.icons} src={chevronLeft} />
                        </div>
                    </Button_Desktop>
                )}
                {isLeftCalendar && !isRightCalendar && (
                    <div
                        className={styles.currentMonth}
                        style={{
                            paddingLeft: 20,
                        }}
                    >
                        <div style={{ whiteSpace: 'pre', fontWeight: 600 }}>
                            {currMonthName().toUpperCase()}{' '}
                        </div>{' '}
                        {currYear()}
                    </div>
                )}
                {!isLeftCalendar && isRightCalendar && (
                    <div className={styles.nextMonth}>
                        <div style={{ whiteSpace: 'pre', fontWeight: 600 }}>
                            {nextMonthName().toUpperCase()}{' '}
                        </div>{' '}
                        {nextYear()}
                    </div>
                )}
                {!isLeftCalendar && isRightCalendar && (
                    <Button_Desktop>
                        <div
                            onClick={() => {
                                nextMonth();
                            }}
                            className={styles.next}
                            style={{
                                background: colorGradient,
                            }}
                        >
                            <img className={styles.icons} src={chevronRight} />
                        </div>
                    </Button_Desktop>
                )}
            </div>
        );

        function currMonthName() {
            return valueLeft.format('MMMM');
        }

        function nextMonthName() {
            return valueLeft.clone().add(1, 'month').format('MMMM');
        }

        function currYear() {
            return valueLeft.format('YYYY');
        }

        function prevMonth() {
            setValueLeft(valueLeft.clone().subtract(1, 'month'));
            setValueRight(valueRight.clone().subtract(1, 'month'));
        }

        function nextMonth() {
            setValueLeft(valueLeft.clone().add(1, 'month'));
            setValueRight(valueRight.clone().add(1, 'month'));
        }

        function thisMonth() {
            return valueLeft.isSame(new Date(), 'month');
        }

        function nextYear() {
            return valueLeft.clone().add(1, 'month').format('YYYY');
        }
    }
}

import React from 'react'
import Calendar from 'rc-year-calendar'
import 'rc-year-calendar/locales/rc-year-calendar.fr';
import useSmartCalendar from '../hooks/useSmartCalendar';

const SmartCalendar = () => {
    const { dataSource } = useSmartCalendar()

    if (dataSource.length === 0)
        return <>Loadng</>
    return (
        <Calendar
            style="background"
            dataSource={dataSource}
            disabledWeekDays={[0, 6]}/>
    )
}

export default SmartCalendar
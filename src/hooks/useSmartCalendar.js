import React, { useEffect, useState } from 'react'
import data from '../data.json'
const useSmartCalendar = () => {
    const [dataSource, setDataSource] = useState([])
    const { selectedDates } = data
    useEffect(() => {
        setDataSource(selectedDates.map(item => ({
            startDate: new Date(item.startDate),
            endDate: new Date(item.endDate),
            color: '#0b9bff'
        })))
    }, [])

    return {
        dataSource
    }
}

export default useSmartCalendar
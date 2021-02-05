import React from 'react'

const calendarRoutes = [
    {
        path: '/calendar',
        exact: true,
        component: React.lazy(() => import('./PatientCalendar')),
    },
]

export default calendarRoutes

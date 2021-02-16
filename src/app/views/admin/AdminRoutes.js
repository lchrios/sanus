import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/:aid/analytics',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.admin,
        exact: false
    },
    /*{
        path: '/dashboard/default',
        component: React.lazy(() => import('./Analytics2')),
        auth: authRoles.admin,
    },
    {
        path: '/dashboard/inventory-management',
        component: React.lazy(() => import('./InventoryManagement')),
        auth: authRoles.admin,
    },*/
]

export default dashboardRoutes

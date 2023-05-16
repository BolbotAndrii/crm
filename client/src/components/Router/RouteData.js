import {lazy} from "react"
import {
    HOME_ROUTE,
    LEADS_ROUTE,
    GROUPS_ROUTE,
    USERS_ROUTE,
    ANALYTICS_ROUTE,
    LOGIN_ROUTE
} from '../../constants/routes'

const routes = [
    {
        label: 'Home',
        path: HOME_ROUTE,
        element: lazy( () => import('../../pages/Common/HomePage')),
        exact: true
    },
    {
        label: 'Leads',
        path: LEADS_ROUTE,
        element: lazy( () => import('../../pages/Leads/LeadsPage')),
        exact: true
    },
    {
        label: 'Groups',
        path: GROUPS_ROUTE,
        element: lazy( () => import('../../pages/Groups/GroupsPage')),
        exact: true
    },
    {
        label: 'Group detail',
        path: GROUPS_ROUTE+ '/:id',
        element: lazy( () => import('../../pages/Groups/GroupPageDetail')),
        exact: true
    },
    {
        label: 'Users',
        path: USERS_ROUTE,
        element: lazy( () => import('../../pages/Users/UsersPage')),
        exact: true
    },
    {
        label: 'Analytics',
        path: ANALYTICS_ROUTE,
        element: lazy( () => import('../../pages/Analytics/AnalyticsPage')),
        exact: true
    },
    {
        label: 'Login',
        path: LOGIN_ROUTE,
        element: lazy( () => import('../../pages/Common/LoginPage')),
        exact: true
    }
]


export default routes
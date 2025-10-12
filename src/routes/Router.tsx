import { FC } from 'react'
import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom'
import ThemePreview from './ThemePreview/ThemePreview'
import Home from './Home/Home'
import BaseLayout from './BaseLayout'
import Event from './Event/Event'
import NotFound from './NotFound/NotFound'
import CodeOfConduct from './CodeOfConduct/CodeOfConduct'
import Team from './Team/Team'
import JobBoard from './JobBoard/JobBoard'

const browserRouter = createHashRouter([{
    element: <BaseLayout />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'codeofconduct',
            element: <CodeOfConduct />
        },
        {
            path: 'team',
            element: <Team />
        },
        {
            path: 'jobs',
            element: <JobBoard />
        },
        {
            path: 'events',
            element: <Event />
        },
        {
            path: 'theme',
            element: <ThemePreview />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}], { basename: '/' })


const Router: FC = () => (<RouterProvider router={browserRouter} />)

export default Router

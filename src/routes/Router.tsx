import { FC } from 'react'
import {
    createHashRouter,
    RouterProvider,
} from 'react-router-dom'
import ThemePreview from './ThemePreview/ThemePreview'
import Home from './Home/Home'
import BaseLayout from './BaseLayout'
import NotFound from './NotFound/NotFound'
import CodeOfConduct from './CodeOfConduct/CodeOfConduct'
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
            path: 'jobboard',
            element: <JobBoard />
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

import { FC } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import ThemePreview from './ThemePreview/ThemePreview'
import Home from './Home/Home'
import BaseLayout from './BaseLayout'
import NotFound from './NotFound/NotFound'
import CodeOfConduct from './CodeOfConduct/CodeOfConduct'

const browserRouter = createBrowserRouter([{
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
            path: 'theme',
            element: <ThemePreview />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
}], { basename: import.meta.env.DEV ? '/' : '/home/' })


const Router: FC = () => (<RouterProvider router={browserRouter} />)

export default Router

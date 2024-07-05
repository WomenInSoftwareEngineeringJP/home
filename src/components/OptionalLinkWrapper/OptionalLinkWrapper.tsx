import { FC, ReactNode } from 'react'

interface OptionalLinkWrapperProps {
    url?: string
    children: ReactNode
}

/**
 * If url is falsy, returns children. If url is truthy, returns the component wrapped in a link
 */
const OptionalLinkWrapper: FC<OptionalLinkWrapperProps> = ({ url, children }) => {
    if (url) {
        return <a href={url} target='_blank' rel="noreferrer" aria-label='link-wrapper'>
            {children}
        </a>
    }
    return children
}

export default OptionalLinkWrapper

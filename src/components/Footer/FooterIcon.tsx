import { FC } from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

interface FooterIconProps {
    label: string
    href: string
    icon: JSX.Element
}

const FooterIcon: FC<FooterIconProps> = ({
    label,
    href,
    icon
}) => {
    return <BottomNavigationAction
        label={label}
        icon={icon}
        href={href}
        aria-label={label}
        target="_blank" />
}

export default FooterIcon

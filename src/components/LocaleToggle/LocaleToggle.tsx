import { FC, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

interface LocaleToggleProps {
}

const LocaleToggle: FC<LocaleToggleProps> = () => {
    const [locale, setLocale] = useState('en');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextLocale: string) => {
        console.log(nextLocale)
        setLocale(nextLocale)
    };

    return <ToggleButtonGroup
        exclusive
        value={locale}
        onChange={handleChange}>
        <ToggleButton value="en">English</ToggleButton>
        <ToggleButton value="ja">日本語</ToggleButton>
    </ToggleButtonGroup>
}

export default LocaleToggle

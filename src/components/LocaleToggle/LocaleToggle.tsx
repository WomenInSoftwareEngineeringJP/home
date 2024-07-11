import { FC, useEffect, useState, useCallback } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useTranslation } from 'react-i18next'
import Locale from '@/i18n/locales'

const LocaleToggle: FC = () => {
    const [locale, setLocale] = useState(Locale.EN)
    const { i18n } = useTranslation()

    const changeLanguage = useCallback(async (nextLocale: Locale) => {
        await i18n.changeLanguage(nextLocale).then(() => {
            setLocale(nextLocale)
            localStorage.setItem('locale', nextLocale)
        })
    }, [i18n])

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale) {
            changeLanguage(savedLocale as Locale).catch((e: Error) => {
                console.error(e)
            })
        }
    }, [changeLanguage])

    const handleChange = (_: React.MouseEvent<HTMLElement>, nextLocale: Locale) => {
        changeLanguage(nextLocale).catch((e: Error) => {
            console.error(e)
        })
    }

    return (
        <ToggleButtonGroup
            exclusive
            value={locale}
            onChange={handleChange}>
            <ToggleButton value={Locale.EN}>English</ToggleButton>
            <ToggleButton value={Locale.JA}>日本語</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default LocaleToggle

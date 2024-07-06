import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Locale from '@/i18n/locales';

const LocaleToggle: FC = () => {
    const { i18n } = useTranslation();
    const [locale, setLocale] = useState(
        () => localStorage.getItem('locale') || Locale.EN
    );

    useEffect(() => {
        i18n.changeLanguage(locale).catch(console.error);
    }, [locale, i18n]);

    const handleChange = (
        _: React.MouseEvent<HTMLElement>,
        nextLocale: Locale
    ) => {
        setLocale(nextLocale);
        localStorage.setItem('locale', nextLocale);
    };

    return (
        <ToggleButtonGroup exclusive value={locale} onChange={handleChange}>
            <ToggleButton value={Locale.EN}>English</ToggleButton>
            <ToggleButton value={Locale.JA}>日本語</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default LocaleToggle;

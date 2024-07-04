import { FC } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Team: FC = () => {
    const { t } = useTranslation();

    return <Container style={{ padding: 32 }}>
        <Typography variant="h1">{t('team.title')}</Typography>
    </Container>
}

export default Team

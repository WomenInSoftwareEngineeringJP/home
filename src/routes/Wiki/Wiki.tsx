import { FC } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Wiki: FC = () => {
    const { t } = useTranslation()

    return <Container style={{ padding: 32 }}>
        <Stack spacing={2}>
            <Typography variant='h1'>
                {t('wiki.title')}
            </Typography>
            <iframe
                src="https://women-in-software.notion.site/ebd/d2c50cd1917c4771a1c80280e1736b19"
                width="100%"
                height="600"
                allow="fullscreen"
                style={{ border: 'none' }}
            />
        </Stack>
    </Container >
}

export default Wiki

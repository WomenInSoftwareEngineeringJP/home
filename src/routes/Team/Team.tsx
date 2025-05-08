import { FC, ReactNode } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import TeamMember from '@/types/TeamMember'
import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard'
import team from './team.json'


const Team: FC = () => {
    const { t } = useTranslation()

    const teamGrid: ReactNode[] = []
    team.forEach((member: TeamMember) => {
        teamGrid.push(<Grid key={member.nameEN}>
            <TeamMemberCard member={member} />
        </Grid>)
    })

    return <Container style={{ padding: 32 }} aria-label="team-container">
        <Stack spacing={2}>
            <Typography variant="h1">{t('team.title')}</Typography>
            <Grid container spacing={2}>
                {teamGrid}
            </Grid>
        </Stack>
    </Container>
}

export default Team

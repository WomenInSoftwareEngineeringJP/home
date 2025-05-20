import { FC } from 'react'
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

    return (
        <Container className="section-padding" aria-label="team-container">
            <Stack spacing={2}>
                <Typography variant="h1">{t('team.title')}</Typography>
                <Grid container spacing={4}>
                    {team.map((member: TeamMember) => (
                        <Grid item xs={12} sm={6} md={4} key={member.nameEN}>
                            <TeamMemberCard member={member} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    )
}

export default Team

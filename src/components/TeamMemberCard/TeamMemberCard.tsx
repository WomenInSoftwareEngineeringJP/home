import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TeamMember from '@/types/TeamMember'
import { getI18n } from 'react-i18next'
import OptionalLinkWrapper from '../OptionalLinkWrapper/OptionalLinkWrapper'

interface TeamMemberCardProps {
    member: TeamMember
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ member }) => {
    const i18n = getI18n()

    const name = i18n.language === 'ja' ? (member.nameJA || member.nameEN) : member.nameEN
    const title = i18n.language === 'ja' ? (member.titleJA || member.titleEN) : member.titleEN

    return <OptionalLinkWrapper url={member.url}>
        <Card sx={{ height: 450, width: 300 }} aria-label="team-member-card">
            <CardMedia
                sx={{ height: 300, width: 300 }}
                image={member.image || 'Placeholder.png'}
                title={name}
                alt-text={`${name} photo`}
            />
            <CardContent>
                <Typography variant='h6'>
                    {name}
                </Typography>
                <Typography variant="subtitle1">
                    {title}
                </Typography>

            </CardContent>
        </Card>
    </OptionalLinkWrapper>
}

export default TeamMemberCard

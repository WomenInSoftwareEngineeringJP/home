import { FC, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import TeamMember from '@/types/TeamMember'
import i18next from 'i18next'
import OptionalLinkWrapper from '../OptionalLinkWrapper/OptionalLinkWrapper';

interface TeamMemberCardProps {
    member: TeamMember
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ member }) => {
    const [name, setName] = useState(member.nameEN)
    const [title, setTitle] = useState(member.titleEN)

    useEffect(() => {
        console.log(i18next.resolvedLanguage)
        if (i18next.resolvedLanguage === 'en') {
            setName(member.nameEN)
            setTitle(member.titleEN)
        } else if (i18next.resolvedLanguage === 'ja') {
            setName(member.nameJA)
            setTitle(member.titleJA)
        }
    }, [member])

    return <OptionalLinkWrapper url={member.url}>
        <Card sx={{ height: 420 }}>
            <CardMedia
                sx={{ height: 300, width: 300 }}
                image={member.image}
                title={name}
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

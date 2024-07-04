import { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TeamMember from '@/types/TeamMember';

interface TeamMemberCardProps {
    member: TeamMember
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({ member }) => {
    return <Card>
        <CardContent>{member.nameEN}</CardContent>
    </Card>
}

export default TeamMemberCard

import { FC } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const CodeOfConduct: FC = () => {
    const { t } = useTranslation()

    return <Container style={{ padding: 32 }}>
        <Stack spacing={2}>
            <Typography variant='h1'>
                {t('header.codeOfConduct')}
            </Typography>
            <Typography variant='body1' >
                Women in Software Engineering Japan (WiSE Japan) is dedicated to providing an empowering experience for everyone who participates in or supports our community. Our events are intended to inspire women to excel in technology careers, and anyone who is there for this purpose is welcome. Because we value the safety and security of our members and strive to have an inclusive community, we do not tolerate harassment of members or event participants in any form. This Code of Conduct was created to clearly define what we mean by a harassment-free experience, so that our community and those who support it are clear about our intent and have access to procedures for addressing issues, should they arise.
            </Typography>
            <Typography variant='h3' >
                Women in Software Engineering Japan Statement of Intent
            </Typography>
            <Typography variant='body1' >
                WiSE Japan values the safety and security of all of our members and, because of that, we will not tolerate any form of harassment or discrimination. Our goal is to provide a safe and secure environment for our members, and to this end we have taken the following actions:
                Provided a statement of intent and code of conduct for events
                Explicitly outlined and defined forms of harassment and discrimination
                Clearly outlined the consequences for those who engage in harassing or discriminatory behavior
                Provided a system for reporting any harassing or discriminatory behavior
                Committed to a periodic review of the code of conduct
            </Typography>

            <Typography variant='h3' >
                Code of Conduct for Women in Software Engineering Japan Events
            </Typography>

            <Typography variant='body1' >
                Women in Software Engineering Japan is an organization (hopefully a nonprofit again soon) dedicated to inspiring women to excel in technology careers. We are committed to our mission statement and equally committed to providing a harassment-free experience for everyone regardless of gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, age, religion, socioeconomic status, caste or creed. We do not tolerate harassment of event participants in any form. Event participants violating these rules may be sanctioned or expelled permanently, at the discretion of the event organizers, which in most cases are members of the WiSE Japan leadership team.
                Forms of Harassment and Discrimination
                Forms of harassment include sexual language and imagery, sexist, racist, and exclusionary jokes, and acts that insult or belittle other event attendees in any way. These are unacceptable at any and all WiSE Japan events. Other forms of harassment and discriminatory behavior include, but are not limited to: offensive verbal comments related to gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, religion, socioeconomic status, caste or creed; sexual images in public spaces; deliberate intimidation; stalking; following; unwarranted photography or recording; sustained disruption of event programming; inappropriate physical contact; and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to immediately comply and may be removed from the event without warning by any member of WiSE Japan leadership. Participants are expected to comply with the WiSE Japan Code of Conduct at all event venues.
                Consequences for Harassment and Discrimination
                If a participant engages in behavior which is harassing or discriminatory in any way, the event organizers may take any action they deem appropriate. These actions include, but are not limited to, issuing a warning or expulsion from all future events. If a warning or expulsion is issued, WiSE Japan leadership may elect to share this information with directors from any network that the participant joins in the future.
                If a participant engages in behavior which is harassing or discriminatory in any way at events in more than one network, WiSE Japan leadership may take any action they deem appropriate. These actions include, but are not limited to, issuing a warning or expulsion from all future WiSE Japan events in all networks.
            </ Typography>

            <Typography variant='h3' >
                How to Report Harassment and Discrimination
            </Typography>
            <Typography variant='body1' >
                If you experience or notice harassment, discrimination, or any of the unacceptable behaviors outlined herein at a WiSE Japan event, or have any other concerns, please report the incident as soon as possible. To report an incident, take one of the following actions: inform the event organizer on site; inform another organizer in your network; report the incident to WiSE Japan Leadership by reaching out to
                Ann Kilzer (Interim Director).
                We encourage you to report any incident of harassment, discrimination, or unacceptable behavior as soon as possible. WiSE Japan leadership will take all appropriate actions to mitigate risk factors moving forward and continue to provide a safe and secure environment for all WiSE Japan members. WiSE Japan leadership is happy to assist attendees in contacting venue security, local law enforcement, or otherwise aid those experiencing harassment so that they feel safe for the duration of the event. The WiSE Japan leadership team will take great care to ensure that the assistance provided meets the needs of attendees who were affected.
            </Typography>

            <Typography variant='h3' >
                Periodic Review
            </Typography>
            <Typography variant='body1' >
                WiSE Japan strives to create a positive and inclusive environment. As such, the WiSE Japan leadership team commits to an annual review of the Code of Conduct to ensure that it continues to align with this goal and address the needs of our community. WiSE Japan welcomes feedback from its members. A feedback form will be established soon
            </Typography>
        </Stack>
    </Container >
}

export default CodeOfConduct

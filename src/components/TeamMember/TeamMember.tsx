import { Container, InfoArea, Avatar, NameField, DescField } from './TeamMember.style'

/* eslint-disable react/require-default-props */
interface TeamMemberProps {
  url?: string
  alt?: string
  name?: string
  desc?: string
}

function TeamMember({ url, alt, name, desc }: TeamMemberProps) {
  return (
    <Container>
      <Avatar
        src={url}
        alt={alt}
      />
      <InfoArea>
        <NameField>{name ?? 'Nome'}</NameField>
        <DescField>{desc ?? 'Descrição'}</DescField>
      </InfoArea>
    </Container>
  )
}

export default TeamMember

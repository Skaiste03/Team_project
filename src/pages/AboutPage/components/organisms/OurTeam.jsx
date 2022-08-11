import React from 'react';
import TeamCard from '../atoms/TeamCard';
import TEXTS from '../../../../shared/texts/texts';
import member1 from '../../../../assets/images/member-1.jpg';
import member2 from '../../../../assets/images/member-2.jpg';
import member3 from '../../../../assets/images/member-3.jpg';
import member4 from '../../../../assets/images/member-4.jpg';
import member5 from '../../../../assets/images/member-5.jpg';
import member6 from '../../../../assets/images/member-6.jpg';
import {
  StyledSection,
  StyledHeading,
  StyledTeamCardsDiv,
} from './OurTeam.style';

const OurTeam = () => {
  return (
    <StyledSection>
      <StyledHeading>{TEXTS.aboutPage.team.heading}</StyledHeading>
      <StyledTeamCardsDiv>
        <TeamCard
          name={TEXTS.aboutPage.members.nr1.name}
          position={TEXTS.aboutPage.members.nr1.position}
          image={member1}
        />
        <TeamCard
          name={TEXTS.aboutPage.members.nr2.name}
          position={TEXTS.aboutPage.members.nr2.position}
          image={member2}
        />
        <TeamCard
          name={TEXTS.aboutPage.members.nr3.name}
          position={TEXTS.aboutPage.members.nr3.position}
          image={member3}
        />
        <TeamCard
          name={TEXTS.aboutPage.members.nr4.name}
          position={TEXTS.aboutPage.members.nr4.position}
          image={member4}
        />
        <TeamCard
          name={TEXTS.aboutPage.members.nr5.name}
          position={TEXTS.aboutPage.members.nr5.position}
          image={member5}
        />
        <TeamCard
          name={TEXTS.aboutPage.members.nr6.name}
          position={TEXTS.aboutPage.members.nr6.position}
          image={member6}
        />
      </StyledTeamCardsDiv>
    </StyledSection>
  );
};

export default OurTeam;

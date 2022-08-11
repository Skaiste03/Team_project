import OurTeam from './components/organisms/OurTeam';
import { StyledAboutPage, StyledTeamContainer } from './AboutPage.style';

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledTeamContainer>
        <OurTeam />
      </StyledTeamContainer>
    </StyledAboutPage>
  );
};

export default AboutPage;

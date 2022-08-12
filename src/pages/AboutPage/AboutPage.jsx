import OurTeam from './components/organisms/OurTeam';
import Features from './components/organisms/Features';
import CallToAction from '../../components/organisms/CallToAction';

import { StyledAboutPage } from './AboutPage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledWrapper theme={'lighter'}>
        <StyledContainer>
          <Features />
        </StyledContainer>
      </StyledWrapper>
      <StyledContainer>
        <OurTeam />
      </StyledContainer>
      <CallToAction />
    </StyledAboutPage>
  );
};

export default AboutPage;

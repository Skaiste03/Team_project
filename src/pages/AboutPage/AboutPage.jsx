import OurTeam from './components/organisms/OurTeam';
import Features from './components/organisms/Features';
import CallToAction from '../../components/organisms/CallToAction';

import { StyledAboutPage } from './AboutPage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Color from './components/organisms/Color/Color';
import Steps from './components/organisms/Steps/Steps';

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledContainer>
        <Steps />
      </StyledContainer>
      <Color />
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

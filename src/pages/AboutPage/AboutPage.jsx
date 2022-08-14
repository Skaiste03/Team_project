import OurTeam from './components/organisms/OurTeam';
import Features from './components/organisms/Features';
import CallToAction from '../../components/organisms/CallToAction';

import { StyledAboutPage } from './AboutPage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import StyledWrapper from '../../assets/styles/StyledWrapper';
import Highlights from './components/organisms/Highlights';
import Steps from './components/organisms/Steps/Steps';
import AboutCard from '../../components/atoms/AboutCard';

import aboutImage from '../../assets/images/about-img.jpg';
import TEXTS from '../../shared/texts/texts';

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <StyledContainer>
        <AboutCard
          image={aboutImage}
          title={TEXTS.navigation.aboutus}
          desc={TEXTS.aboutPage.aboutDesc}
        />
      </StyledContainer>
      <StyledContainer>
        <Steps />
      </StyledContainer>
      <Highlights />
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

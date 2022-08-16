import {
  StyledServicePage,
  StyledServicePageHeading,
} from './ServicePage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import { useParams } from 'react-router-dom';
import SERVICES from '../../shared/constants/services';
import Article from './components/Article/Article';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import CallToAction from '../../components/organisms/CallToAction';
import shuffleArray from '../../shared/func/shuffleArray';

const ServicePage = () => {
  const { id } = useParams();

  const service = SERVICES.find((service) => service.id === +id);
  const services = shuffleArray(SERVICES);

  return (
    <StyledServicePage>
      <StyledContainer>
        <StyledServicePageHeading>{service.text}</StyledServicePageHeading>
        <Layout>
          <Sidebar otherServices={services} />
          <Article service={service} />
        </Layout>
      </StyledContainer>
      <CallToAction />
    </StyledServicePage>
  );
};

export default ServicePage;

import {
  StyledServicePage,
  StyledServicePageHeading,
  StyledServicePageParagraph1,
} from './ServicePage.style';
import StyledContainer from '../../assets/styles/StyledContainer';
import { useParams } from 'react-router-dom';
import SERVICES from '../../shared/constants/services';

const ServicePage = () => {
  const { id } = useParams();

  const service = SERVICES.find((service) => service.id === +id);

  return (
    <StyledServicePage>
      <StyledContainer>
        <aside></aside>
        <article>
          <img src={service.img.image} alt={service.img.alt} />
          <StyledServicePageHeading>{service.text}</StyledServicePageHeading>
          <StyledServicePageParagraph1>
            {service.paragraph1}
          </StyledServicePageParagraph1>
        </article>
      </StyledContainer>
    </StyledServicePage>
  );
};

export default ServicePage;

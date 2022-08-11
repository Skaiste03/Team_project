import TEXTS from '../texts/texts';
import serviceImgOne from '../../assets/imagesservice-img-1.png';
import serviceImgTwo from '../../assets/imagesservice-img-2.png';
import serviceImgThree from '../../assets/imagesservice-img-3.png';
import { uid } from 'uid';

const EXPERIANCES = [
  {
    id: uid(),
    text: `${TEXTS.homePage.services.conventient.title}`,
    icon: `${serviceImgOne}`,
  },
  {
    id: uid(),
    text: `${TEXTS.homePage.services.expert.title}`,
    icon: `${serviceImgTwo}`,
  },
  {
    id: uid(),
    text: `${TEXTS.homePage.services.pricing.title}`,
    icon: `${serviceImgThree}`,
  },
];

export default EXPERIANCES;

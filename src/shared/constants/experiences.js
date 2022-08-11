import TEXTS from '../texts/texts';
import serviceImgOne from '../../assets/images/service-img-1.png';
import serviceImgTwo from '../../assets/images/service-img-2.png';
import serviceImgThree from '../../assets/images/service-img-3.png';
import { uid } from 'uid';

const EXPERIANCES = [
  {
    id: uid(),
    title: `${TEXTS.homePage.services.conventient.title}`,
    dec: `${TEXTS.homePage.services.conventient.desc}`,
    icon: `${serviceImgOne}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.services.expert.title}`,
    dec: `${TEXTS.homePage.services.expert.desc}`,
    icon: `${serviceImgTwo}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.services.pricing.title}`,
    dec: `${TEXTS.homePage.services.pricing.desc}`,
    icon: `${serviceImgThree}`,
  },
];

export default EXPERIANCES;

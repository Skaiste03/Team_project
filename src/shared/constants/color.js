import { uid } from 'uid';
import TEXTS from '../texts/texts';
import image1 from '../../assets/images/cta-bg-1.jpg';
import image2 from '../../assets/images/cta-bg-2.jpg';

const COLOR = [
  {
    id: uid(),
    img: `${image1}`,
    title: `${TEXTS.aboutPage.color.titles.firstTitle}`,
    desc: `${TEXTS.aboutPage.color.desc}`,
    color: '#F85B29E5',
  },
  {
    id: uid(),
    img: `${image2}`,
    title: `${TEXTS.aboutPage.color.titles.secondTitle}`,
    desc: `${TEXTS.aboutPage.color.desc}`,
    color: '#000000E5',
  },
  {
    id: uid(),
    img: `${image2}`,
    title: `${TEXTS.aboutPage.color.titles.thirdTitle}`,
    desc: `${TEXTS.aboutPage.color.desc}`,
    color: '#7443CAE5',
  },
];

export default COLOR;

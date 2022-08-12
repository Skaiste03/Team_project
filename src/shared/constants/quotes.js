import { uid } from 'uid';
import TEXTS from '../texts/texts';

export const HOME_PAGE_QUOTES = [
  {
    id: uid(),
    title: `${TEXTS.homePage.process.firstProcess.title}`,
    desc: `${TEXTS.homePage.process.firstProcess.desc}`,
    aboutDesc: `${TEXTS.aboutPage.steps.quotes.firstDesc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.process.secondProcess.title}`,
    desc: `${TEXTS.homePage.process.secondProcess.desc}`,
    aboutDesc: `${TEXTS.aboutPage.steps.quotes.firstDesc}`,
  },
  {
    id: uid(),
    title: `${TEXTS.homePage.process.thirdProcess.title}`,
    desc: `${TEXTS.homePage.process.thirdProcess.desc}`,
    aboutDesc: `${TEXTS.aboutPage.steps.quotes.firstDesc}`,
  },
];

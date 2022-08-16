import TEXTS from '../texts/texts';
import {
  DiagServiceIcon,
  EngineServiceIcon,
  WheelServiceIcon,
  OilServiceIcon,
  BodyServiceIcon,
  BatteryServiceIcon,
  IncurServiceIcon,
  CustomServiceIcon,
} from '../../assets/icons';
import diagnosticImg from '../../assets/images/service-diagnostic.jpg';
import engineRepairImg from '../../assets/images/service-engine-repair.jpg';
import wheelRepairImg from '../../assets/images/service-wheel-repair.jpg';
import oilChangeImg from '../../assets/images/service-oil-change.jpg';
import bodyWorkImg from '../../assets/images/service-body-work.jpg';
import batteryImg from '../../assets/images/service-battery.jpg';
import insuranceImg from '../../assets/images/service-car-insurance.jpg';
import customImg from '../../assets/images/service-custom.jpg';
import carWashImg from '../../assets/images/service-car-wash.jpg';
import acRepairImg from '../../assets/images/service-ac-repair.jpg';

const SERVICES = [
  {
    id: 1,
    text: `${TEXTS.services.diag}`,
    logo: <DiagServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: diagnosticImg,
      alt: 'service-diagnostic.jpg',
    },
  },
  {
    id: 2,
    text: `${TEXTS.services.engine}`,
    logo: <EngineServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: engineRepairImg,
      alt: 'service-engine-repair.jpg',
    },
  },
  {
    id: 3,
    text: `${TEXTS.services.wheel}`,
    logo: <WheelServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: wheelRepairImg,
      alt: 'service-wheel-repair.jpg',
    },
  },
  {
    id: 4,
    text: `${TEXTS.services.oil}`,
    logo: <OilServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: oilChangeImg,
      alt: 'service-oil-change.jpg',
    },
  },
  {
    id: 5,
    text: `${TEXTS.services.body}`,
    logo: <BodyServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: bodyWorkImg,
      alt: 'service-body-work.jpg',
    },
  },
  {
    id: 6,
    text: `${TEXTS.services.batteries}`,
    logo: <BatteryServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: batteryImg,
      alt: 'service-battery.jpg',
    },
  },
  {
    id: 7,
    text: `${TEXTS.services.insur}`,
    logo: <IncurServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: insuranceImg,
      alt: 'service-car-insurance.jpg',
    },
  },
  {
    id: 8,
    text: `${TEXTS.services.custom}`,
    logo: <CustomServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: customImg,
      alt: 'service-custom.jpg',
    },
  },
  {
    id: 9,
    text: `${TEXTS.services.wash}`,
    logo: <DiagServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: carWashImg,
      alt: 'service-car-wash.jpg',
    },
  },
  {
    id: 10,
    text: `${TEXTS.services.ac}`,
    logo: <EngineServiceIcon />,
    title1: `${TEXTS.servicePage.title1}`,
    paragraph1: `${TEXTS.servicePage.paragraph1}`,
    title2: `${TEXTS.servicePage.title2}`,
    paragraph2: `${TEXTS.servicePage.paragraph2}`,
    quote: `${TEXTS.servicePage.quote}`,
    img: {
      image: acRepairImg,
      alt: 'service-ac-repair.jpg',
    },
  },
];

export default SERVICES;

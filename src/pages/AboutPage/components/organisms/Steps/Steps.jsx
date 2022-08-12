import React from 'react';
import QuoteCard from '../../../../../components/atoms/QuoteCard';
import TEXTS from '../../../../../shared/texts/texts';
import image from '../../../../../assets/images/cta-bg-1.jpg';

const Steps = () => {
  return (
    <section>
      <div>
        <div>
          <h3>{TEXTS.aboutPage.steps.title}</h3>
          <p>{TEXTS.aboutPage.steps.desc}</p>
        </div>
        <QuoteCard />
      </div>
      <div>
        <img src='' alt='' />
      </div>
    </section>
  );
};

export default Steps;

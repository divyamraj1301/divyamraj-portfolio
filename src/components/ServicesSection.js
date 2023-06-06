import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import Frontend from '../assets/images/Frontend.jpg';
import Backend from '../assets/images/Backend.jpg';
import Contentwriter from '../assets/images/ContentWriter.jpeg';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-contect: space-between;
    margin-top: 5rem;
    margin-bottom: 120px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle subheading="" heading="What will I do for you?" />
        <div className="services__allItems">
          <div>
            <img src={Frontend} alt="Frontend" />
            <ServicesSectionItem
              title="Front End Designing"
              desc="I design Front-end for websites with a unique look."
            />
          </div>
          <div>
            <img src={Backend} alt="Backend" />
            <ServicesSectionItem
              title="Backend Development"
              desc="I develop backend web apps, with high-egde logic."
            />
          </div>
          <div>
            <img src={Contentwriter} alt="Content" />
            <ServicesSectionItem
              title="Content Writing"
              desc="I also write contents and editorials."
            />
          </div>
        </div>
      </div>
    </ServicesItemStyles>
  );
}

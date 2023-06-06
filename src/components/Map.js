import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.jpg';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <PText>Gardanibagh, Patna Bihar</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/New+Alkapuri,+Shivpuri,+Chitkohra,+Patna,+Bihar+800002/@25.5845559,85.1087288,580m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x39ed5800d55a8d99:0xd79ad6b505494ae8!2sSawji+Kirana+Store!8m2!3d25.5843375!4d85.1114977!16s%2Fg%2F11dxl7yjlk!3m5!1s0x39ed5806c5601fab:0x7abee426ac059ee7!8m2!3d25.5846628!4d85.1112024!16s%2Fg%2F11gfgqzjr9?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}

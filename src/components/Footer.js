import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Divyam Raj</h1>
          <PText>
            A freelance web designer and developer from Patna, Bihar. I always
            make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 8235858291',
                path: 'tel:+91 8235858291',
              },
              {
                title: 'divyamraj1301@gmail.com',
                path: 'mailto:divyamraj1301@gmail.com',
              },
              {
                title: 'Gardanibagh, Patna, Bihar',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/divyam-raj-108b03225/',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com/divyamraj13',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 -
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://webcifar.com"
            >
              Divyam Raj
            </a>
            |Web Dev
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

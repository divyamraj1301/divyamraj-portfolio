import React from 'react';
import styled from 'styled-components';

const ColStyles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'Link',
      title: 'home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'about',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <links to={item.path}>{item.title}</links>
            ) : (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}

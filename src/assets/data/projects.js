import { v4 as uuidv4 } from 'uuid';
// import BlackBuk from '../images/blackbuk.jpg';
import Portfolio from '../images/portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Black Buk E-Commerce Website',
    desc:
      'A Web application designed for Roy Shirting and Clothing - BlackBuk Inc.',
    // img: Blackbuk,
  },
  {
    id: uuidv4(),
    name: 'Divyam Raj Portfolio Website',
    desc: 'Official Portfolio Website of Divyam Raj.',
    img: Portfolio,
  },
];

export default projects;

/*eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
/*eslint-disable */

import './Footer.css';

function Footer() {
  return (
    <footer className="social">
      <FontAwesomeIcon icon={faTwitterSquare} />
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faInstagramSquare} />
      <FontAwesomeIcon icon={faGithubSquare} />
    </footer>
  );
}

export default Footer;

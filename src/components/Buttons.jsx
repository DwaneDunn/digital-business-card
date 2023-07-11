/*eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
/*eslint-disable */

import './Buttons.css';

function Buttons() {
  return (
    <div className="contact">
      <button className="email">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </button>
      <button className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </button>
    </div>
  );
}

export default Buttons;

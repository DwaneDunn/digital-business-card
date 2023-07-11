import profilePhoto from '../assets/images/profile-photo.jpg';
import './Header.css';

function Header() {
  return (
    <>
      <img src={profilePhoto} className="profile-photo" alt="Person headshot" />
    </>
  );
}

export default Header;

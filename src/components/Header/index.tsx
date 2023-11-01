import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import logoImage from '../../assets/images/logoMeta.png';
import './styles.scss';

interface HeaderProps {
  isSearch: boolean;
}

const Header = ({ isSearch }: HeaderProps) => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>
      </div>
      {!!isSearch && <SearchBar />}
    </header>
  );
};

export default Header;

import { useState } from 'react';
import Navigation from '../../atoms/Navigation';
import {
  StyleHeader,
  StyleHeaderContactsIconWrapper,
  StyleHeaderContactsTextWrapper,
  StyleHeaderContactsWrapper,
  StyleHeaderNavButtonWrapper,
  StyleHeaderSeparator,
  StyleNavigationWrapper,
} from './Header.styled';
import { ReactComponent as LogoIcon } from '../../../assets/images/logo-icon.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/images/phone-icon.svg';
import { ReactComponent as NavIcon } from '../../../assets/images/nav-icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyleHeader>
      <Link to={'/'}>
        <LogoIcon />
      </Link>

      <StyleHeaderNavButtonWrapper onClick={() => setIsNavOpen(!isNavOpen)}>
        <NavIcon />
      </StyleHeaderNavButtonWrapper>

      <StyleNavigationWrapper isNavOpen={isNavOpen}>
        <Navigation />
        <StyleHeaderSeparator></StyleHeaderSeparator>
        <StyleHeaderContactsWrapper href={'tel:+18002652452'}>
          <StyleHeaderContactsIconWrapper>
            <PhoneIcon />
          </StyleHeaderContactsIconWrapper>
          <StyleHeaderContactsTextWrapper>
            <p>Road Assistance</p>
            <p>1800 265 24 52</p>
          </StyleHeaderContactsTextWrapper>
        </StyleHeaderContactsWrapper>
      </StyleNavigationWrapper>
    </StyleHeader>
  );
};

export default Header;

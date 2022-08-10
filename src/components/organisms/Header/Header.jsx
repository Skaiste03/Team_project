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
import { LogoIcon, NavIcon, PhoneIcon } from '../../../assets/icons';
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

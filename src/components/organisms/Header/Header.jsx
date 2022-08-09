import { useState } from 'react';
import Navigation from '../../atoms/Navigation';
import {
  StyleHeader,
  StyleHeaderContactsIconWrapper,
  StyleHeaderContactsSubtext,
  StyleHeaderContactsText,
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
        <StyleHeaderContactsWrapper>
          <StyleHeaderContactsIconWrapper>
            <PhoneIcon />
          </StyleHeaderContactsIconWrapper>
          <StyleHeaderContactsTextWrapper>
            <StyleHeaderContactsText>Road Assistance</StyleHeaderContactsText>
            <StyleHeaderContactsSubtext>
              1800 265 24 52
            </StyleHeaderContactsSubtext>
          </StyleHeaderContactsTextWrapper>
        </StyleHeaderContactsWrapper>
      </StyleNavigationWrapper>
    </StyleHeader>
  );
};

export default Header;

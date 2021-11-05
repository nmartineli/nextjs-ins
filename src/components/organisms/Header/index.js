import styled from 'styled-components';
import { AiOutlineCamera } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';

import HeaderButton from '../../atoms/HeaderButton';
import HeaderSearchInput from '../../atoms/HeaderSearchInput';
import Logo from '../../atoms/Logo';

import HeaderMenu from '../../molecules/HeaderMenu';

const HeaderBar = styled.header`
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2px 16px;
  @media (min-width: 999px) {
    height: 54px;
    padding: 7px 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media (min-width: 935px) {
    max-width: 935px;
  }
`;

const HeaderLogo = styled(Logo)`
  max-height: 29px;
`;

const Button = styled(HeaderButton)`
  display: block;
  margin: 0;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <Button>
          <AiOutlineCamera />
        </Button>
        <HeaderLogo />
        <Button>
          <RiMessengerLine />
        </Button>
        <HeaderSearchInput />
        <HeaderMenu />
      </HeaderContainer>
    </HeaderBar>
  );
};

export default Header;

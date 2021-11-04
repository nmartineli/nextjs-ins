import styled from 'styled-components';
import { AiOutlineCamera } from 'react-icons/ai';

import HeaderButton from '../../atoms/HeaderButton';
import HeaderSearchInput from '../../atoms/HeaderSearchInput';
import Logo from '../../atoms/Logo';

import HeaderMenu from '../../molecules/HeaderMenu';

const HeaderBar = styled.header`
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 999px) {
    height: 54px;
    padding: 7px 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 935px;
  height: 100%;
`;

const HeaderLogo = styled(Logo)`
  max-height: 29px;
`;

const CameraButton = styled(HeaderButton)`
  display: none;
  @media (max-width: 469px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <CameraButton>
          <AiOutlineCamera />
        </CameraButton>
        <HeaderLogo />

        <HeaderSearchInput />
        <HeaderMenu />
      </HeaderContainer>
    </HeaderBar>
  );
};

export default Header;

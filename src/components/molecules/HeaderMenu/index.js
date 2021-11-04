import styled from 'styled-components';
import { FiPlusSquare, FiCompass } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHome } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';

import HeaderButton from '../../atoms/HeaderButton';
import ProfilePicture from '../../atoms/ProfilePicture';

const HeaderProfilePicture = styled(ProfilePicture)`
  width: 22px;
`;

const IconBar = styled.nav`
  display: flex;
`;

const Navbar = () => {
  return (
    <IconBar>
      <HeaderButton>
        <AiFillHome />
      </HeaderButton>
      <HeaderButton>
        <RiMessengerLine />
      </HeaderButton>
      <HeaderButton>
        <FiPlusSquare />
      </HeaderButton>
      <HeaderButton>
        <FiCompass />
      </HeaderButton>
      <HeaderButton>
        <AiOutlineHeart />
      </HeaderButton>
      <HeaderButton>
        <HeaderProfilePicture />
      </HeaderButton>
    </IconBar>
  );
};

export default Navbar;

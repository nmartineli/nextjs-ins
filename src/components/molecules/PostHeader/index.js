import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';

import UserNameLink from '../../atoms/UserNameLink';
import ProfilePicture from '../../atoms/ProfilePicture';
import ReactionButton from '../../atoms/ReactionButton';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px 4px 14px 16px;
  display: flex;
  justify-content: space-between;
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicturePost = styled(ProfilePicture)`
  width: 32px;
`;

const PostHeader = () => {
  return (
    <Header>
      <UserInformation>
        <ProfilePicturePost
          src="https://pbs.twimg.com/profile_images/1439720224807391232/_VFWhlQd_400x400.jpg"
          alt="Profile Picture"
          aria-label="Profile Picture"
        />
        <UserNameLink href="#">nataliamartineli</UserNameLink>
      </UserInformation>
      <ReactionButton>
        <BsThreeDots />
      </ReactionButton>
    </Header>
  );
};

export default PostHeader;

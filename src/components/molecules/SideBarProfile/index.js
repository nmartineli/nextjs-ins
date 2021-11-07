import styled from 'styled-components';
import ProfilePicture from '../../atoms/ProfilePicture';

const ProfileElement = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  position: fixed;
`;

const SideBarPicture = styled(ProfilePicture)`
  padding: 1px;
  height: 56px;
  width: 56px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProfileUser = styled.div`
  font-size: 14px;
  margin-left: 15px;

  & .name {
    color: ${({ theme }) => theme.colors.secondaryText};
    margin: 0;
  }

  & .username {
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: 700;
    margin: 0 0 5px 0;
  }
`;

const SideBarProfile = () => {
  return (
    <ProfileElement>
      <SideBarPicture />
      <ProfileUser>
        <p className="username">nataliamartineli</p>
        <p className="name">Natalia Martineli</p>
      </ProfileUser>
    </ProfileElement>
  );
};

export default SideBarProfile;

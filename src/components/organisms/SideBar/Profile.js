import styled from 'styled-components';
import ProfilePicture from '../../atoms/ProfilePicture';

const ProfileElement = styled.div`
  display: flex;
  justify-content: row;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 32px;
`;

const ProfileUserPicture = styled(ProfileImage)`
  padding: 1px;
  height: 56px;
  width: 56px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ProfileUser = styled.div`
  font-size: 14px;

  & .name {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  & .username {
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: 700;
  }
`;

const SideBarProfile = () => {
  return (
    <ProfileElement>
      <ProfileUserPicture
        src="https://pbs.twimg.com/profile_images/1439720224807391232/_VFWhlQd_400x400.jpg"
        alt="Profile Picture"
        aria-label="Profile Picture"
      />
      <ProfileUser>
        <p className="ProfileUser">nataliamartineli</p>
        <p className="name">Natalia Martineli</p>
      </ProfileUser>
    </ProfileElement>
  );
};

export default SideBarProfile;

import styled from 'styled-components';

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 32px;
`;

export default () => {
  return (
    <ProfilePicture
      src="https://pbs.twimg.com/profile_images/1439720224807391232/_VFWhlQd_400x400.jpg"
      alt="Profile Picture"
      aria-label="Profile Picture"
    />
  );
};

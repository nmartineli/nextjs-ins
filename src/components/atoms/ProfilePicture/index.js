import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
`;

const ProfilePicture = ({ className }) => {
  return (
    <Image
      src="https://pbs.twimg.com/profile_images/1439720224807391232/_VFWhlQd_400x400.jpg"
      alt="Profile Picture"
      aria-label="Profile Picture"
      className={className}
    />
  );
};

export default ProfilePicture;

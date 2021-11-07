import styled from 'styled-components';
import Post from '../Post';
import getPhotos from '../../../hooks/getPhotos';

const Section = styled.section`
  max-width: 614;
  margin: 0 auto;
`;

const MainTimelineSection = () => {
  const photos = getPhotos();

  return (
    <Section>
      <Post />
    </Section>
  );
};

export default MainTimelineSection;

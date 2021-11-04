import styled from 'styled-components';

import PostHeader from '../molecules/PostHeader';
import PostReactionBar from '../molecules/PostReactionBar';
import PostCaption from '../molecules/PostCaption';
import PostComment from '../molecules/PostComment';
import PostDate from '../atoms/PostDate';
import PostCommentSection from '../molecules/PostCommentSection';

const PostContainer = styled.section`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 20px;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

const PostImage = styled.img`
  max-width: 600px;
`;

export default function Post() {
  return (
    <PostContainer>
      <PostHeader />
      <PostImage src="https://place-hold.it/600" />
      <PostReactionBar />
      <PostCaption />
      <PostComment />
      <PostDate>Há um dia</PostDate>
      <PostCommentSection />
    </PostContainer>
  );
}

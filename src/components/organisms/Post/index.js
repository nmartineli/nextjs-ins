import styled from 'styled-components';

import PostHeader from '../../molecules/PostHeader';
import PostReactionBar from '../../molecules/PostReactionBar';
import PostCaption from '../../molecules/PostCaption';
import PostComment from '../../molecules/PostComment';
import PostDate from '../../atoms/PostDate';
import PostCommentSection from '../../molecules/PostCommentSection';

const PostContainer = styled.section`
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 auto 15px auto;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
`;

export default function Post() {
  return (
    <PostContainer>
      <PostHeader />
      <PostImage src="https://via.placeholder.com/600" />
      <PostReactionBar />
      <PostCaption />
      <PostComment />
      <PostDate>Há um dia</PostDate>
      <PostCommentSection />
    </PostContainer>
  );
}

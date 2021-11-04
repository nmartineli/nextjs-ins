import styled from 'styled-components';
import { BsEmojiSmile } from 'react-icons/bs';

import PostCommentInput from '../../atoms/PostCommentInput';
import ReactionButton from '../../atoms/ReactionButton';
import PostCommentButton from '../../atoms/PostCommentButton';
import PostCommentForm from '../../atoms/PostCommentForm';

const PostCommentSection = () => {
  return (
    <PostCommentForm>
      <ReactionButton>
        <BsEmojiSmile />
      </ReactionButton>

      <PostCommentInput />

      <PostCommentButton>Publicar</PostCommentButton>
    </PostCommentForm>
  );
};

export default PostCommentSection;

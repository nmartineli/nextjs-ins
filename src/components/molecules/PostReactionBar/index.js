import styled from 'styled-components';
import ReactionButton from '../../atoms/ReactionButton';
import LikeButton from '../LikeButton';

import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';

const ReactionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

const PostReactionBar = () => {
  return (
    <ReactionDiv>
      <div>
        <LikeButton />

        <ReactionButton>
          <FaRegComment />
        </ReactionButton>

        <ReactionButton>
          <FiSend />
        </ReactionButton>
      </div>
      <ReactionButton>
        <BsBookmark />
      </ReactionButton>
    </ReactionDiv>
  );
};

export default PostReactionBar;

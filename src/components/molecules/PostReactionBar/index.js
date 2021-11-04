import styled from 'styled-components';
import ReactionButton from '../../atoms/ReactionButton';

import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';

const ReactionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const PostReactionBar = () => {
  return (
    <ReactionDiv>
      <div>
        <ReactionButton>
          <AiOutlineHeart />
        </ReactionButton>

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

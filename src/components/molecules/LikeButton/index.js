import ReactionButton from '../../atoms/ReactionButton';
import { useState } from 'react';
import { IconContext } from 'react-icons';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <ReactionButton
      onClick={() => {
        setLiked(!liked);
        console.log(liked);
      }}
    >
      {liked === false ? (
        <AiOutlineHeart />
      ) : (
        <IconContext.Provider value={{ color: 'red' }}>
          <AiFillHeart />
        </IconContext.Provider>
      )}
    </ReactionButton>
  );
};

export default LikeButton;

import styled from 'styled-components';

import PostText from '../../atoms/PostText';
import UserNameLink from '../../atoms/UserNameLink';

const Div = styled.div`
  margin-bottom: 2px;
  padding: 0 16px;
`;

const PostCaption = () => {
  return (
    <Div>
      <UserNameLink href="#">nataliamartineli</UserNameLink>
      <PostText>Texto de teste para a legenda da foto</PostText>
    </Div>
  );
};

export default PostCaption;

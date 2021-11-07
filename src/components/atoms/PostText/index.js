import styled from 'styled-components';

const Text = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 400;
  margin-left: 5px;
  font-size: 14px;
`;

const PostText = ({ children, className }) => {
  return <Text className={className}>{children}</Text>;
};

export default PostText;

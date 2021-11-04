import styled from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.details};
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  font-weight: 700;
  opacity: 0.5;

  & :hover {
    cursor: pointer;
  }
`;

const PostCommentButton = ({ children }) => <Button>{children}</Button>;

export default PostCommentButton;

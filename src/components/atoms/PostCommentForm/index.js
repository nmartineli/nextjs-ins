import styled from 'styled-components';

const Form = styled.form`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  padding: 6px 16px;
  font-size: 14px;
`;

const PostCommentForm = ({ children }) => <Form>{children}</Form>;

export default PostCommentForm;

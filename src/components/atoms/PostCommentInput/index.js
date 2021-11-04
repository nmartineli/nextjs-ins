import styled from 'styled-components';

const Input = styled.textarea`
  height: 18px;
  font-family: ${({ theme }) => theme.font.family};
  line-height: 18px;
  margin-left: 16px;
  resize: none;
  border: none;
  width: 100%;
  & :focus {
    outline: none;
  }
`;

const PostCommentInput = () => (
  <Input
    aria-label="Adicione um comentário..."
    placeholder="Adicione um comentário..."
    autocomplete="off"
  ></Input>
);

export default PostCommentInput;

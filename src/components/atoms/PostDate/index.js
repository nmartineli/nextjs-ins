import styled from 'styled-components';

const Date = styled.p`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 8px 16px;
`;

const PostDate = ({ children }) => <Date>{children}</Date>;

export default PostDate;

import styled from 'styled-components';

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 700;
  text-decoration: none;
  margin-left: 12px;
  font-size: 14px;

  & :hover {
    text-decoration: underline;
  }
`;

const UserNameLink = ({ children }) => {
  return <Link>{children}</Link>;
};

export default UserNameLink;

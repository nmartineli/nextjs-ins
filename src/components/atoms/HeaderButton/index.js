import styled from 'styled-components';

const Button = styled.button`
  font-size: 25px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  margin-left: 20px;
  padding: 0;
`;

const HeaderButton = ({ children, className }) => (
  <Button className={className}>{children}</Button>
);

export default HeaderButton;

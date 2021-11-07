import styled from 'styled-components';

const Button = styled.button`
  font-size: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  padding: 8px;
  & :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const ReactionButton = ({ children, className }) => {
  return <Button className={className}>{children}</Button>;
};

export default ReactionButton;

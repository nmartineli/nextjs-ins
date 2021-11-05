import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-size: 13px;
  border-radius: 3px;
  padding: 5px 10px 5px 26px;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 100;
  display: none;

  @media (min-width: 769px) {
    display: block;
  }

  & :focus {
    outline: none;
  }
`;

const HeaderSearchInput = () => <Input type="search" placeholder="Pesquisar" />;

export default HeaderSearchInput;

import styled from 'styled-components';
import Post from './Post';

const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  max-width: 935px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 30px;
`;

const Timeline = styled.section`
  max-width: 614;
`;

const LateralBar = styled.aside`
  width: 293px;
  display: none;

  @media (min-width: 985px) {
    display: block;
  }
`;

export default () => {
  return (
    <Content>
      <Section>
        <Timeline>
          <Post />
        </Timeline>
        <LateralBar>perfil</LateralBar>
      </Section>
    </Content>
  );
};

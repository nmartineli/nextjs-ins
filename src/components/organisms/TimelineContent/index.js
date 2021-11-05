import styled from 'styled-components';
import SideBarProfile from '../../molecules/SideBarProfile';
import Post from '../Post';

const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  max-width: 970px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 30px;
`;

const Timeline = styled.section`
  max-width: 614;
  margin: 0 auto;
`;

const SideBar = styled.aside`
  display: none;

  @media (min-width: 985px) {
    display: block;
    width: 293px;
    margin-top: 20px;
  }
`;

export default () => {
  return (
    <Content>
      <Section>
        <Timeline>
          <Post />
        </Timeline>
        <SideBar>
          <SideBarProfile />
        </SideBar>
      </Section>
    </Content>
  );
};

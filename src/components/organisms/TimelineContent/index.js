import styled from 'styled-components';
import TimelineSideBar from '../TimelineSideBar';
import MainTimelineSection from '../MainTimeLineSection';

const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  width: 100%;
`;

const Section = styled.section`
  max-width: 970px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 30px;
`;

const TimelineContent = () => {
  return (
    <Content>
      <Section>
        <MainTimelineSection />
        <TimelineSideBar />
      </Section>
    </Content>
  );
};

export default TimelineContent;

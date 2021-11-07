import styled from 'styled-components';
import SideBarProfile from '../../molecules/SideBarProfile';

const SideBar = styled.aside`
  display: none;

  @media (min-width: 985px) {
    position: sticky;
    display: block;
    width: 293px;
    margin-top: 20px;
  }
`;

const TimelineSideBar = () => {
  return (
    <SideBar>
      <SideBarProfile />
    </SideBar>
  );
};

export default TimelineSideBar;

import styled from 'styled-components';
import ProfilePicture from '../atoms/ProfilePicture';

const Navbar = styled.nav`
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 10px 16px;

  //breakpoints: 1000 > completo
`; //breakpoints: 999 -   completo

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
  max-width: 935px;
`;

const ButtonImageCamera = styled.img`
  height: 22px;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const ButtonImage = styled.img`
  width: 22px;
  margin-left: 22px;
`;

const Logo = styled.img`
  max-height: 29px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Searchbar = styled.input`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-size: 13px;
  border-radius: 3px;
  padding: 5px 10px 5px 26px;
  font-family: 'Roboto';
  font-weight: 100;
`;

const ProfilePictureNav = styled(ProfilePicture)`
  width: 22px;
  margin-left: 22px;
  border-radius: 50%;
`;

export default function NavBar() {
  return (
    <Navbar>
      <NavbarContainer>
        <ButtonImageCamera
          src="/img/camera-icon.svg"
          alt="New story"
          aria-label="New story"
        />

        <Logo src="/img/logo.png" alt="Instagram" aria-label="Instagram" />

        <Searchbar type="search" placeholder="Pesquisar" />

        <Icons>
          <ButtonImage src="/img/home.svg" alt="Home" aria-label="Home" />

          <ButtonImage
            src="/img/messager.svg"
            alt="Messager"
            aria-label="Messager"
          />
          <ButtonImage
            src="/img/plus.svg"
            alt="New post"
            aria-label="New post"
          />
          <ButtonImage
            src="/img/compass.svg"
            alt="Explore"
            aria-label="Explore"
          />
          <ButtonImage
            src="/img/heart.svg"
            alt="Activity feed"
            aria-label="Activity feed"
          />
          <ProfilePictureNav />
        </Icons>
      </NavbarContainer>
    </Navbar>
  );
}

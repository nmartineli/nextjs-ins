import styled from 'styled-components';

const Image = styled.img``;

const Logo = ({ className }) => (
  <Image
    src={'/img/logo.png'}
    className={className}
    alt="Instagram"
    aria-label="Instagram"
  />
);

export default Logo;

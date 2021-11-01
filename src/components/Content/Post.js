import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';

import ProfilePicture from '../atoms/ProfilePicture';

const PostContainer = styled.section`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 20px;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

const PostHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px 4px 14px 16px;
`;

const ProfilePicturePost = styled(ProfilePicture)`
  height: 32px;
  width: 32px;
`;

const UserNamePost = styled.a`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 700;
  text-decoration: none;
  margin-left: 12px;
  font-size: 14px;

  & :hover {
    text-decoration: underline;
  }
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;

const PostImage = styled.img`
  max-width: 600px;
`;

const PostCaption = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 400;
  margin-left: 5px;
  font-size: 14px;
  margin-bottom: 4px;
`;

const ReactBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const ReactButton = styled.button`
  font-size: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  padding: 8px;
  & :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const PostComment = styled.span`
  margin-bottom: 4px;
`;

const PostDate = styled.p`
  font-size: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 8px 16px;
`;

export default function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <UserInformation>
          <ProfilePicturePost />
          <UserNamePost href="#">nataliamartineli</UserNamePost>
        </UserInformation>
      </PostHeader>
      <PostImage src="https://place-hold.it/600" />
      <ReactBar>
        <div>
          <ReactButton>
            <AiOutlineHeart />
          </ReactButton>
          <ReactButton>
            <FaRegComment />
          </ReactButton>

          <ReactButton>
            <FiSend />
          </ReactButton>
        </div>
        <ReactButton>
          <i className="far fa-bookmark"></i>
        </ReactButton>
      </ReactBar>
      <div>
        <UserNamePost href="#">nataliamartineli</UserNamePost>
        <PostCaption>Texto de teste para a legenda da foto</PostCaption>
      </div>
      <PostComment>
        <UserNamePost href="#">nataliamartineli</UserNamePost>
        <PostCaption>Texto de teste para comentário da foto</PostCaption>
      </PostComment>
      <PostDate>há 16 segundos </PostDate>
    </PostContainer>
  );
}

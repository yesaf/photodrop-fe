import styled from 'styled-components';
import albumLogo from '../../../../../assets/images/album-logo.svg';
import { Album } from '../../../../../api/types/serverResponses';

interface IAlbumInfoProps {
    album: Album;
}

function AlbumInfo({ album }: IAlbumInfoProps) {
    return (
        <AlbumContainer>
            <a href={`/albums/${album.albumId}`}>
                <img src={albumLogo} alt=""/>
                <div className="info-container">
                    <span>{album.name}</span>
                    <span>{album.location}</span>
                </div>
            </a>
        </AlbumContainer>
    );
}

const AlbumContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  max-width: 30rem;
  margin-bottom: 1rem;
  
  border: 1px solid #000;
  border-radius: 0.5rem;
  
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
  
  &:active {
    background-color: #e5e5e5;
  }
  
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 2rem;
    text-decoration: none;
    padding: 1rem;
    border-radius: 0.5rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    .info-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: #000
    }
  }
`;

export default AlbumInfo;

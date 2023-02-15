import styled from 'styled-components';
import AlbumInfo from './components/albumInfo/AlbumInfo';
import { useEffect, useState } from 'react';
import { IAlbum } from '../../../api/types/serverResponses';
import albumService from '../../../api/services/album';
import Loader from '../../shared/loader/Loader';
import { Link } from 'react-router-dom';

function Albums() {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        albumService.getAlbums()
            .then((res) => {
                const albumList = res.data;
                setAlbums(albumList);
                setLoading(false);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    setLoading(false);
                }
            });
    }, []);

    return (
        <>
            {
                loading ?
                    <Loader/> :
                    <AlbumList>
                        <Link to="/create" className="add-album">
                            Add Album
                        </Link>
                        {albums.map((album, index) => (
                            <AlbumInfo key={index} album={album}/>
                        ))}
                    </AlbumList>
            }
        </>

    );
}

const AlbumList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 0;

  .add-album {
    color: #fff;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    width: 10rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    background-color: #3276c3;

    &:before {
      display: inline-block;
      content: '+';
      border: 1px solid #fff;
      border-radius: 100%;
      padding: 0.2rem;
      height: 1rem;
      width: 1rem;
      line-height: 0.75rem;
      text-align: center;
      font-size: 1.5rem;
      margin-right: 0.25rem;
    }

    &:hover {
      background-color: #2a5e9c;
    }

    &:active {
      background-color: #1f4a7a;
    }
  }
`;

export default Albums;

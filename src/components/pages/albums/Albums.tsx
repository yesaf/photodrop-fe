import styled from 'styled-components';
import AlbumInfo from './components/albumInfo/AlbumInfo';

function Albums() {
    const data = [
        {
            id: '1', name: 'Album 1', location: 'Location1', date: '2020-01-01',
            totalPhotos: 10, phoneNumbers: ['12345678901'],
        },
        {
            id: '2', name: 'Album 2', location: 'Location2', date: '2020-01-02',
            totalPhotos: 10, phoneNumbers: ['12345678901'],
        },
        {
            id: '3', name: 'Album 3', location: 'Location3', date: '2020-01-03',
            totalPhotos: 10, phoneNumbers: ['12345678901'],
        },
    ];

    return (
        <AlbumList>
            <a href="/create" className="add-album">
                Add Album
            </a>
            {data.map((album) => (
                <AlbumInfo key={album.id} album={album}/>
            ))}
        </AlbumList>
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

import { useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';

function Album() {
    const albumId = useParams().id;
    const album = {
        id: '1', name: 'Album 1',
        location: 'Location1', date: '2020-01-01',
        totalPhotos: 10, phoneNumbers: ['380974553233'],
    };

    return (
        <AlbumContainer>
            <div className="info-container">
                <span><b>Name:</b> {album.name}</span>
                <span><b>Location:</b> {album.location}</span>
                <span><b>Date:</b> {album.date}</span>
                <span><b>Total photos:</b> {album.totalPhotos}</span>
            </div>
            <div className="phones">
                <header>
                    <span>Phone Numbers:</span>
                    <button className="add-phone">
                        Add Phone
                    </button>
                </header>
                {
                    album.phoneNumbers.map((phone) => (
                        <PhoneInput
                            value={phone}
                            disabled/>))
                }
            </div>
        </AlbumContainer>
    );
}

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  padding: 2rem;
  gap: 1rem;

  .info-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: flex-start;
    gap: 1rem;
    font-size: 1.2rem;
    
  }

  .phones {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;

    header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      
        .add-phone {
            color: #fff;
            padding: 0.5rem 1rem;
            border: 1px solid #fff;
            border-radius: 1rem;
            cursor: pointer;
            font-size: 1rem;
            background-color: #3276c3;
            
        }
    }
  }
`;


export default Album;

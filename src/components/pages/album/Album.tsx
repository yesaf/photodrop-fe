import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';
import closeIcon from '../../../assets/images/close-square.svg';

function Album() {
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [phone, setPhone] = useState('');

    const albumId = useParams().id;

    const [album, setAlbum] = useState({
        id: '1', name: 'Album 1',
        location: 'Location1', date: '2020-01-01',
        totalPhotos: 10, phoneNumbers: ['380974553233'],
    });

    const handleAddPhoneNumber = () => {
        const phoneRegex = /(0|91)?[6-9][0-9]{9}/;

        if (!showPhoneInput) {
            setShowPhoneInput(true);
        } else if (phoneRegex.test(phone)) {
            let newAlbum = { ...album };
            if (!(phone in album.phoneNumbers)) {
                newAlbum.phoneNumbers.push(phone);
            }
            setAlbum({
                ...newAlbum,
            });

            setPhone('')
            setShowPhoneInput(false);
        }
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
                    <button className="add-phone-button"
                            onClick={handleAddPhoneNumber}>
                        Add Phone
                    </button>
                </header>

                <div className={`add-phone-input ${showPhoneInput ? 'show' : ''}`}>
                    <div>
                        <PhoneInput
                            country={'ua'}
                            value={phone}
                            onChange={(value) => setPhone(value)}
                        />
                    </div>
                    <button onClick={() => setShowPhoneInput(false)}>
                        <img src={closeIcon} alt=""/>
                    </button>
                </div>

                <div className="phone-numbers">
                    {
                        album.phoneNumbers.map((phone) => (
                            <div>
                                <PhoneInput
                                    value={phone}
                                    disabled/>
                                {/*<button>*/}
                                {/*    <img src={closeIcon} alt=""/>*/}
                                {/*</button>*/}
                            </div>
                                ))
                    }
                </div>
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
      font-size: 1.2rem;
      font-weight: bold;

      .add-phone-button {
        color: #fff;
        padding: 0.5rem 1rem;
        border: 1px solid #fff;
        border-radius: 1rem;
        cursor: pointer;
        font-size: 1.1rem;
        background-color: #3276c3;

      }
    }

    .phone-numbers {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;

      .react-tel-input {
        width: 300px;
      }
    }

    .add-phone-input {
      //display: none;
      height: 0;
      transition: margin-top 0.5s ease-in-out;
      
      &.show {
        display: flex;
        width: 100%;
        justify-content: center;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #e0e0e0;
        padding-bottom: 0.5rem;
      }
      
      & > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        opacity: 0.7;


        & > img {
          width: 2rem;
          height: 2rem;
        }
        
        &:hover {
            opacity: 1;
        }
        
        &:active {
            opacity: 0.5;
        }
      }
    
    }
    
  }
`;


export default Album;

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PhoneInput from '../../shared/phoneInput/PhoneInput';
import PhoneField from './components/phoneField/PhoneField';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';
import closeIcon from '../../../assets/images/close-square.svg';

function Album() {
    console.log(typeof PhoneInput);
    const [album, setAlbum] = useState({
        id: '1', name: 'Album 1',
        location: 'Location1', date: '2020-01-01',
        totalPhotos: 10, phoneNumbers: ['380974553233'],
    });
    const [showPhoneInput, setShowPhoneInput] = useState(album.phoneNumbers.length === 0);
    const [phone, setPhone] = useState('');

    const albumId = useParams().id;

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

            setPhone('');
            setShowPhoneInput(false);
        }
    };

    const handleDeletePhoneNumber = (phone: string) => {
        let newAlbum = { ...album };
        newAlbum.phoneNumbers = newAlbum.phoneNumbers.filter((p) => p !== phone);
        setAlbum({
            ...newAlbum,
        });
    };

    return (
        <AlbumContainer>
            <div className="info-container">
                <span><b>Name:</b> {album.name}</span>
                <span><b>Location:</b> {album.location}</span>
                <span><b>Date:</b> {album.date}</span>
                <span><b>Total photos:</b> {album.totalPhotos}</span>
            </div>

            <PhonesContainer>
                <header>
                    <span>Phone Numbers:</span>
                    <button className="add-phone-button"
                            onClick={handleAddPhoneNumber}>
                        Add Phone
                    </button>
                </header>

                <AddPhoneInput className={showPhoneInput ? 'show' : ''}>
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
                </AddPhoneInput>

                <div className="phone-numbers">
                    {
                        album.phoneNumbers.map((phone) => (
                            <PhoneField phone={phone}
                                        onDelete={handleDeletePhoneNumber}/>
                        ))
                    }
                </div>
            </PhonesContainer>
        </AlbumContainer>
    );
}

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 45rem;
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
`;

const PhonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 1rem;

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

      &:hover {
        background-color: #2a5e9c;
      }
    }
  }

  .phone-numbers {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .react-tel-input {
      width: 300px;
    }
  }
`;

const AddPhoneInput = styled.div`
  display: flex;
  height: 0;
  margin-top: 0;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  transition: height 0.35s ease-in-out, margin-top 0.35s ease-in-out;

  &.show {
    margin-top: 0.25rem;
    height: 2.25rem;
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
`;

export default Album;

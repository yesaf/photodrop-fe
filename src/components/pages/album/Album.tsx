import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PhoneInput from '../../shared/phoneInput/PhoneInput';
import PhoneField from './components/phoneField/PhoneField';
import 'react-phone-input-2/lib/style.css';
import closeIcon from '../../../assets/images/close-square.svg';
import { PhonesContainer, AlbumContainer, AddPhoneInput } from './Album.styles';
import UploadPhotos from './components/uploadPhoto/UploadPhotos';


function Album() {
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
            <UploadPhotos/>
        </AlbumContainer>
    );
}

export default Album;

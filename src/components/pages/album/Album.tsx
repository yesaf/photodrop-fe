import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import { AlbumContainer } from './Album.styles';
import UploadModal from './components/uploadModal/UploadModal';


function Album() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [album, setAlbum] = useState({
        id: '1', name: 'Album 1',
        location: 'Location1', date: '2020-01-01',
        totalPhotos: 10,
    });

    const albumId = useParams().id;

    return (
        <AlbumContainer>
            <div className="info-container">
                <span><b>Name:</b> {album.name}</span>
                <span><b>Location:</b> {album.location}</span>
                <span><b>Date:</b> {album.date}</span>
                <span><b>Total photos:</b> {album.totalPhotos}</span>
            </div>

            <button className="add-photos-button"
                    onClick={() => {setShowUploadModal(true)}}>
                Add photos
            </button>
            <UploadModal
                isOpen={showUploadModal}
                onClose={() => setShowUploadModal(false)}
            />
        </AlbumContainer>
    );
}

export default Album;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumContainer } from './Album.styles';
import UploadModal from './components/uploadModal/UploadModal';
import { IAlbumWithPhotos } from '../../../api/types/serverResponses';
import Loader from '../../shared/loader/Loader';
import albumService from '../../../api/services/album';

function Album() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [album, setAlbum] = useState<IAlbumWithPhotos | undefined | null>();
    const albumId = useParams().id;

    useEffect(() => {
        if (albumId && !showUploadModal) {
            albumService.getAlbum(albumId)
                .then((res) => {
                    setAlbum(res.data);
                });
        }
    }, [albumId, showUploadModal]);

    const strDateToLocale = (date: string) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString();
    };

    if (typeof album === 'undefined') {
        return <Loader/>;
    }

    if (album === null) {
        return <div>Album not found</div>;
    }

    return (
        <AlbumContainer>
            <div className="info-container">
                <span><b>Name:</b> {album.name}</span>
                <span><b>Location:</b> {album.location}</span>
                <span><b>Date:</b> {strDateToLocale(album.createdAt)}</span>
            </div>

            <button className="add-photos-button"
                    onClick={() => {
                        setShowUploadModal(true);
                    }}>
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

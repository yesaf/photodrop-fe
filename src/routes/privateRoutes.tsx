import { Navigate } from 'react-router-dom';
import Albums from '../components/pages/albums/Albums';
import Album from '../components/pages/album/Album';
import BackButton from '../components/shared/backButton/BackButton';
import CreateAlbum from '../components/pages/createAlbum/CreateAlbum';
import CloseButton from '../components/shared/closeButton/CloseButton';

const privateRoutes = [
    { element: <Navigate to="/albums"/>, path: '/' },
    { element: <Albums/>, path: '/albums' },
    { element: <Album/>, path: '/albums/:id', leftButton: <BackButton/> },
    { element: <CreateAlbum/>, path: '/create', leftButton: <CloseButton/> },
];

export default privateRoutes;

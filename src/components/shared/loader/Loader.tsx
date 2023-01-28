import cameraAperture from '../../../assets/images/camera-aperture.svg';
import styled from 'styled-components';

function Loader() {
    return (
        <LoaderImage src={cameraAperture} alt=""/>
    );
}

const LoaderImage = styled.img`
  width: 15rem;
  height: 15rem;
  animation: spin 1.5s linear infinite;
  margin-top: 5rem;
  
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(-30deg);
    }
    30% {
        transform: rotate(-60deg);
    }
    70% {
        transform: rotate(-300deg);
    }
    85% {
        transform: rotate(-330deg);
    }
    100% {
        transform: rotate(-360deg);
    }
  }
  
`;

export default Loader;

import closeIcon from '../../../assets/images/close.svg';
import styled from 'styled-components';

function CloseButton() {
    return (
        <a href="/albums">
            <CloseImage src={closeIcon} alt=""/>
        </a>
    );
}

const CloseImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.75rem;
`;

export default CloseButton;

import backIcon from '../../../assets/images/back.svg';
import styled from 'styled-components';

function BackButton() {
    return (
        <a href="/albums">
            <BackImage src={backIcon} alt=""/>
        </a>
    )
}

const BackImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.75rem;
`;

export default BackButton;

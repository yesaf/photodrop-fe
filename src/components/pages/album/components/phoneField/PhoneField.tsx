import PhoneInput from 'react-phone-input-2';
import deleteIcon from '../../../../../assets/images/delete.svg';
import styled from 'styled-components';

interface IPhoneFieldProps {
    phone: string;
    onDelete: (phone: string) => void;
}

function PhoneField({ phone, onDelete }: IPhoneFieldProps) {
    return (
        <PhoneContainer>
            <PhoneInput
                value={phone}
                disabled/>
            <button className="delete-phone" onClick={() => onDelete(phone)}>
                <img src={deleteIcon} alt=""/>
            </button>
        </PhoneContainer>
    );
}

const PhoneContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > .delete-phone {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
    
    &:hover {
      opacity: 1;
    }

    & > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export default PhoneField;

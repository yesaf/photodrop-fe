import styled from 'styled-components';
import { useState } from 'react';
import DatePicker from './components/datePicker/DatePicker';
import albumService from '../../../api/services/album';
import { useNavigate } from 'react-router-dom';

function CreateAlbum() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const handleDayClick = (day: Date) => {
        setDate(day);
    };

    const handleSave = () => {
        albumService.createAlbum(name, location, date)
            .then(() => {
            navigate('/albums');
        });
    }

    return (
        <InputsContainer>
            <input type="text" placeholder="Album name" value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Album location" value={location}
                   onChange={(e) => setLocation(e.target.value)}/>
            <DatePicker value={date} onChange={handleDayClick}/>
            <button className="create-album" onClick={handleSave}>Save</button>
        </InputsContainer>
    );
}

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 45rem;
  padding: 2rem;
  font-size: 1.2rem;
  align-items: center;

  & > input {
    width: min(calc(100vw - 1rem), 20rem);
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  & > .create-album {
    width: min(calc(100vw - 1rem), 20rem);
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background: #3276c3;
    cursor: pointer;
    box-sizing: content-box;
    color: #fff;
    font-size: 1.4rem;
    
    &:hover {
        background: #2a5e9c;
    }
    
    &:active {
        background: #1f4a7a;
    }
      
  }
`;

export default CreateAlbum;

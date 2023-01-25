import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/src/style.css';

interface IDatePickerProps {
    value: Date;
    onChange: (date: Date) => void;
}

function DatePicker({ value, onChange }: IDatePickerProps) {

    const handleDayClick = (day: Date) => {
        onChange(day);
    };

    return (
        <DatePickerContainer>
            <input type="text" value={value.toLocaleDateString()}/>
            <DayPicker selected={value} onDayClick={handleDayClick}/>
        </DatePickerContainer>
    );
}

const DatePickerContainer = styled.div`
  position: relative;

  & > .rdp {
    position: absolute;
    display: none;
    top: 2.25rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    background: #fff;
  }
  
  & > .rdp:hover {
    display: block;
  }

  & > input {
    width: min(calc(100vw - 1rem), 20rem);
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    &:focus {
      outline: none;
    }

    &:focus + .rdp {
      display: block;
    }
  }
`;

export default DatePicker;

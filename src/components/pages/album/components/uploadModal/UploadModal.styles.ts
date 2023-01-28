import styled from 'styled-components';

interface ModalContainerProps {
    isModalOpen: boolean;
}

export const ModalContainer = styled.div.attrs<ModalContainerProps>((props) => ({
    style: {
        display: props.isModalOpen ? 'flex' : 'none',
    },
}))<ModalContainerProps>`
  --width-var: min(calc(100% - 8rem), 45rem);
  
  position: fixed;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  top: 4rem;
  min-height: 12rem;
  max-height: calc(100% - 8rem);
  left: calc((100% - var(--width-var)) / 2 - 2rem);
  width: var(--width-var);
  padding: 1rem 1.5rem;
  overflow-y: auto;
  
  border: 1px solid #ccc;
  border-radius: 1rem;
`;

export const PhonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;

    & > .close-button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      opacity: 0.7;


      & > img {
        width: 2.5rem;
        height: 2.5rem;
      }

      &:hover {
        opacity: 1;
      }

      &:active {
        opacity: 0.5;
      }
    }
    
  }

  .phone-numbers {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.5rem 2rem;
    margin-top: 1rem;

    .react-tel-input {
      width: 300px;
    }
  }
`;

export const AddPhoneInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  margin-top: 0.25rem;
  height: 2.25rem;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #e0e0e0;
  padding-bottom: 0.5rem;
  overflow: visible;


  .add-phone-button {
    margin-left: 0.5rem;
    color: #fff;
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.1rem;
    background-color: #3276c3;

    &:hover {
      background-color: #2a5e9c;
    }
  }
  
  .add-phone-button:disabled {
    background-color: #ccc;
  }

  
`;

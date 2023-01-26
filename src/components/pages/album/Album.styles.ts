import styled from 'styled-components';

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 45rem;
  padding: 2rem;
  gap: 1rem;

  .info-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: flex-start;
    gap: 1rem;
    font-size: 1.2rem;

  }
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

    .add-phone-button {
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
  }

  .phone-numbers {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 1rem;

    .react-tel-input {
      width: 300px;
    }
  }
`;

export const AddPhoneInput = styled.div`
  display: flex;
  height: 0;
  margin-top: 0;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  transition: height 0.35s ease-in-out, margin-top 0.35s ease-in-out;

  &.show {
    margin-top: 0.25rem;
    height: 2.25rem;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #e0e0e0;
    padding-bottom: 0.5rem;

  }

  & > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.7;


    & > img {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      opacity: 1;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;

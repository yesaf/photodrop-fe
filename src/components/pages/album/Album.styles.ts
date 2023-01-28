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
  
  .add-photos-button {
    margin-left: 0.5rem;
    color: #fff;
    padding: 0.5rem 1rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.4rem;
    background-color: #3276c3;
    width: 15rem;

    &:hover {
      background-color: #2a5e9c;
    }
  }
`;


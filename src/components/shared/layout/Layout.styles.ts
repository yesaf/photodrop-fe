import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #e0e0e0;

    .left {
      position: absolute;
      left: 0;
    }

    .right {
      position: absolute;
      right: 0;
    }

    img {
      height: 1.5rem;
    }
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

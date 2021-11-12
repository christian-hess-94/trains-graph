import styled from "styled-components";

export const App = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 1vmin);
  color: white;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  margin: 0.2em;
  border: 2px solid gray;
`;
export const StyledFlexContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.2em;
  margin: 0.2em;
  border: 2px solid gray;
`;
export const StyledFlexContainerNoBorder = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.2em;
  margin: 0.2em;
`;

export const StyledGridRow = styled.section`
  display: flex;
  width: auto;
  align-items: center;
`;
export const StyledFlexGridRow = styled.section`
  display: flex;
  flex: 1;
  width: auto;
  align-items: center;
`;

import styled, { createGlobalStyle } from "styled-components";

export const BlockNoteStyles = createGlobalStyle`
  .bn-container, .bn-editor {
    height: 100%;
  }

  .bn-editor { 
    padding-top: 1rem;
  }
`;

export const BlockNoteWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  background: #f0f0f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

export const HomePageLayout = styled.div`
  display: grid;
  grid-template-areas:
    "channel menu menu menu"
    "channel collabSpace collabSpace chatRoom";
  grid-template-columns: 350px minmax(auto, 1fr) 0px 350px;
  grid-template-rows: auto 1fr;
  gap: 8px;
  height: 100vh;
  padding: 8px;
  box-sizing: border-box;
`;

export const Channel = styled(Section)`
  grid-area: channel;
`;

export const Menu = styled(Section)`
  grid-area: menu;
  padding: 16px;
`;

export const CollabSpace = styled(Section)`
  grid-area: collabSpace;
  padding: 16px;
`;

export const ChatRoom = styled(Section)`
  grid-area: chatRoom;
  padding: 16px;
`;

import { jsx, css, Global, ClassNames } from "@emotion/react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  margin-bottom: 10px;
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 0 0 10px 10px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default function NavBar() {
  return (
    <>
      <StyledDiv>This is NavBar</StyledDiv>
    </>
  );
}

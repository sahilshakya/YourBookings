import styled from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    `
  justify-content: space-between;
  align-items
  `}

  ${(props) =>
    props.type === "vertical" &&
    `
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};
export default Row;

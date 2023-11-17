import styled from "styled-components";

const StyledHeader = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;
const Header = () => {
  return <StyledHeader>StyledHeader</StyledHeader>;
};

export default Header;

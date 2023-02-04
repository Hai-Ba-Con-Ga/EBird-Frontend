import styled from "styled-components";

export const RuleSectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-top: 5rem;
  /* padding: 5rem 2rem; */
  display: flex;
  scroll-snap-align: start;

`;
export const RuleBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: var(--text-7xl);
    color: var(--black);
  }
  ul li {
    max-width: 80%;
    font-size: var(--text-5xl);
    line-height: var(--lineHeightMedium);
    color: var(--black);
    list-style: disc;
    font-weight: 500;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

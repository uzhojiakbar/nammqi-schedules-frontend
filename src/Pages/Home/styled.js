import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export { Container, ContentWrapper };

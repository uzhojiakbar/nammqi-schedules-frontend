import styled from "styled-components";

const TableWrapper = styled.div`
  width: 70%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow: auto;

  min-width: 450px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const TableHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: fit-content;

  th,
  td {
    padding: 10px;
    width: 100%;
    height: 80px;

    text-align: left;
    border-bottom: 1px solid #ddd;

    display: flex;
    align-items: center;
  }

  tr {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 8px;
    }
  }
`;

export { TableWrapper, TableHeader, Title, Table };

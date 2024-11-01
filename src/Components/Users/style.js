import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

  min-width: 450px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const AddButton = styled.button`
  background-color: green;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 8px;
    }
  }
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.edit ? "green" : "red")};
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`;

export { TableWrapper, TableHeader, Title, AddButton, Table, ActionButton };

import React from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import {
  ActionButton,
  AddButton,
  Table,
  TableHeader,
  TableWrapper,
  Title,
} from "./style";

const BuildingsTable = () => (
  <TableWrapper>
    <TableHeader>
      <Title>Binolar</Title>
      <AddButton>
        <FaPlus /> Qo'shish
      </AddButton>
    </TableHeader>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nomi</th>
          <th>Filial</th>
          <th>Amallar</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((id) => (
          <tr key={id}>
            <td>{id}</td>
            <td>Nomi</td>
            <td>Filial</td>
            <td>
              <ActionButton edit>
                <FaEdit />
              </ActionButton>
              <ActionButton>
                <FaTrash />
              </ActionButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </TableWrapper>
);

export default BuildingsTable;

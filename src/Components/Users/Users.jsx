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
import {useGetUsers} from "../../Hooks/useRegister.jsx";

const UsersData = () => {
  const { data: users } = useGetUsers();

  return (
    <TableWrapper>
      <TableHeader>
        <Title>Foydaluvchilar</Title>
        <AddButton>
          <FaPlus /> Qo'shish
        </AddButton>
      </TableHeader>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Huquqi</th>
            <th>Buyruqlar</th>
          </tr>
        </thead>
        <tbody>
          {users?.users?.map((v, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{v.username}</td>
              <td>{v.role}</td>
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
};

export default UsersData;

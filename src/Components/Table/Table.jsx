import React, { useRef, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Table, TableHeader, TableWrapper, Title } from "./style";

import { Button } from "../../Root/global.js";

// MODALS
import AddBuildingModal from "../Modal/AddBuildingModal/AddBuildingModal.jsx";

const BuildingsTable = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <>
      {/* ADD MODAL */}
      <AddBuildingModal
        setOpenAddModal={setOpenAddModal}
        openAddModal={openAddModal}
      />
      <TableWrapper>
        <TableHeader>
          <Title>Binolar</Title>
          <Button color="green" onClick={() => setOpenAddModal(!openAddModal)}>
            <FaPlus /> Qo'shish
          </Button>
        </TableHeader>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nomi</th>
              <th>Filial</th>
              <th>Yaratdi</th>
              <th>Amallar</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((id) => (
              <tr key={id}>
                <td>{id}</td>
                <td>Nomi</td>
                <td>Filial</td>
                <td>Admin</td>
                <td>
                  <Button.Con w={"fit-content"} m={"0px"}>
                    <Button
                      color="green"
                      onClick={() => setOpenAddModal(!openAddModal)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      color="red"
                      onClick={() => setOpenAddModal(!openAddModal)}
                    >
                      <FaTrash />
                    </Button>
                    {/* <ActionButton edit></ActionButton> */}
                    {/* <ActionButton>
                    <FaTrash />
                  </ActionButton> */}
                  </Button.Con>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
};

export default BuildingsTable;

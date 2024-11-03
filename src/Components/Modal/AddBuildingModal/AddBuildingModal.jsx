import React, { useState } from "react";
import getNotify from "../../../Hooks/useNotify";
import { addBuilding } from "../../../Hooks/useRegister";
import { Input, Modal } from "antd";
import { Button, Container } from "../../../Root/global";
import TextArea from "antd/es/input/TextArea";

const AddBuildingModal = ({ openAddModal, setOpenAddModal }) => {
  const [BinoNomi, setBinoNomi] = useState("");
  const [FilialNomi, setFilialNomi] = useState("");
  const { notify } = getNotify();

  const { mutate } = addBuilding(
    () => {
      notify("ok", "Yaxshi"); // Yuklanish holatini ko'rsatish
    },
    (error) => {
      console.log(error);
    }
  );

  const handleCancel = () => {
    setOpenAddModal(false);
    console.log(BinoNomi);
    console.log(FilialNomi);
    setBinoNomi("");
    setFilialNomi("");
  };

  const CreateBuilding = async () => {
    if (!BinoNomi.length || !FilialNomi.length) {
      notify("err", "Barcha maydonlarni to'ldiring");
      return;
    }

    console.log("OTDI");

    try {
      await mutate({ name: BinoNomi, filial: FilialNomi });
    } catch (error) {
      console.log("CATCH", error);
    }
  };

  return (
    <Modal
      title="Bino qo'sish"
      open={openAddModal}
      onCancel={handleCancel}
      footer={[
        <Button.Con className="buttons">
          <Button
            onClick={handleCancel}
            type="reset"
            color="red"
            className="button"
          >
            Bekor qilish
          </Button>
          <Button
            onClick={CreateBuilding}
            type="close"
            color="green"
            className="button"
          >
            Qo'shish
          </Button>
        </Button.Con>,
      ]}
    >
      <Container.Input>
        <Input
          showCount
          required
          maxLength={128}
          type="text"
          placeholder="Bino nomini nomini kiriting"
          value={BinoNomi}
          onChange={(e) => setBinoNomi(e.target.value || "")}
        />
        <TextArea
          showCount
          maxLength={128}
          autoSize={{
            minRows: 2,
            maxRows: 12,
          }}
          value={FilialNomi}
          placeholder="Toplam haqida malumot kiriting"
          onChange={(e) => setFilialNomi(e.target.value)}
        />
      </Container.Input>
    </Modal>
  );
};

export default AddBuildingModal;

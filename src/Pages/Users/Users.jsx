import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/api";
import getNotify from "../../Hooks/useNotify";
import UsersData from "../../Components/Users/Users";
import {useGetUsers} from "../../Hooks/useRegister.jsx";

const Users = () => {
  const navigate = useNavigate();

  return <UsersData  />;
};

export default Users;

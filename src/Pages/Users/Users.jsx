import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/api";
import getNotify from "../../Hooks/useNotify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const { notify } = getNotify();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await instance.get("/api/users/all");
        console.log(res?.data);

        notify("ok", "Foydalanuvchilar yuklandi.");
        setUsers(res.data); // Ma'lumotlarni state-ga yozish
      } catch (error) {
        if (error.response && error.response.status === 403) {
          //   alert("Access denied. Admins only.");
          notify("err", "Siz admin emassiz, Bu yerga kirish huquqingiz yoq");
        } else {
          notify("err", "Malumot yuklanishda xatolik");
        }
      }
    };

    fetchUsers();
  }, [navigate]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.role} - {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

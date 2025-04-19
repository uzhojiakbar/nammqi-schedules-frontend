import {useMutation, useQuery} from "@tanstack/react-query";
import { instance } from "../api/api";
import toast from "react-hot-toast";
import { delCookie, setCookie } from "./cookieHook";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Cookie from "js-cookie";


export const useSignIn = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/api/auth/login/", data), // API ga so'rov yuborish
    onSuccess: async (data) => {
      console.log(data?.data);

      Cookie.set("access_token", data?.data?.access_token);
      Cookie.set("refresh_token", data?.data?.refresh_token);
      Cookie.set("sub", data?.data?.sub);

      // const data2 = await instance.get(`/api/user/me`);
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const addBuilding = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/api/buildings", data),
    onSuccess: (data) => {
      console.log(data?.data);

      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const getBuilding = (onSuccess, onError) => {
  return useMutation({
    mutationFn: () => instance.get("/api/buildings"),
    onSuccess: (data) => {
      console.log(data?.data);

      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error);
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const useLogOut = () => {
  const navigate = useNavigate(); // navigate hook dan foydalanamiz
  const logOut = () => {
    try {
      delCookie("access_token");
      delCookie("refresh_token");
      delCookie("sub");

      toast.success("Hisobdan muvaffaqiyatli chiqdingiz!");
      navigate("/");
      document.location.reload();
    } catch (error) {
      toast.error("Chiqishda qandaydur xatolik yuz berdi.");
      console.log(error);
    }
  };
  return logOut; // logOut funksiyasini qaytaramiz
};

// ADMIN

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["GetAllUsers"],
    queryFn: async () => {
      try {
        const data = await instance.get(`/api/admin/users`);
        console.log("UserData", data?.data);
        return data?.data;
      } catch (error) {
        console.error("Error fetching data", error);
        throw error; // xatolikni qaytarish
      }
    },
    staleTime: 1000 * 60 * 10,
  });
};


// USER
export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["ProfileInfo"],
    queryFn: async () => {
      try {
          const data = await instance.get(`/api/user/me`);
          console.log("UserData", data?.data);
          return data?.data;
      } catch (error) {
        console.error("Error fetching data", error);
        throw error; // xatolikni qaytarish
      }
    },
    staleTime: 1000 * 60 * 10,
  });
};
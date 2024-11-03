import { useMutation } from "@tanstack/react-query";
import { instance } from "../api/api";
import toast from "react-hot-toast";
// import { addToLS } from "./localstorageHook";
import { delCookie, setCookie } from "./cookieHook";
import { useNavigate } from "react-router-dom";

const notify = (type = "ok", text) => {
  if (type === "ok") {
    toast.success(text || "Tayyor");
  } else if (type === "err") {
    toast.error(text || "Xato");
  } else if (type === "wait") {
    toast.loading(text || "Kuting...");
  }
};

// export const useGetProfile = () => {
//   const accessToken = getCookie("access"); // Cookie'dan access token olish
//   return useQuery({
//     queryKey: ["getProfile"],
//     queryFn: async () => {
//       // Agar username mavjud bo'lsa, so'rovni yuborish
//       const response = await instance.get(`/account/profile/`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       return response.data;
//     },
//     refetchOnWindowFocus: false,
//     onSuccess: (data) => {
//       console.log("Profil muvaffaqiyatli olindi.", data);
//     },
//     onError: (error) => {
//       console.error("Profil olishda xatolik:", error);
//       // Xatoliklarni ko'rsatish uchun zarur bo'lsa, toast qo'shishingiz mumkin
//     },
//   });
// };

// export const useSignIn = (onSuccess, onError) => {
//   return useMutation({
//     mutationFn: (data) => instance.post("/api/auth/login/", data), // API ga so'rov yuborish
//     onSuccess: (data) => {
//       console.log(data);

//       setCookie("access", data?.data?.token);
//       setCookie("login", true);
//       // setloader(0); // Loader-ni o'chirish

//       if (onSuccess) {
//         toast.success("Hisobga kirdingiz"); // Muvaffaqiyatli xabar
//       }
//     },
//     onError: (error) => {
//       console.log(error);
//       if (onError) {
//         onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
//       } else {
//         toast.error(
//           "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
//         );
//       }
//     },
//   });
// };

export const useSignIn = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/api/auth/login/", data), // API ga so'rov yuborish
    onSuccess: (data) => {
      console.log(data?.data);

      setCookie("access", data?.data?.token);
      setCookie("login", true);
      setCookie("role", data?.data?.role);
      setCookie("username", data?.data?.username);

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

export const useLogOut = () => {
  const navigate = useNavigate(); // navigate hook dan foydalanamiz

  const logOut = () => {
    try {
      delCookie("access");
      delCookie("login");

      toast.success("Hisobdan muvaffaqiyatli chiqdingiz!");
      navigate("/login");
    } catch (error) {
      toast.error("Chiqishda qandaydur xatolik yuz berdi.");
      console.log(error);
    }
  };

  return logOut; // logOut funksiyasini qaytaramiz
};

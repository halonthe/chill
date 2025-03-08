import { useNavigate } from "react-router";
import AuthLayouts from "../layouts/AuthLayouts";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // cegah browser relaod
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const usernameInput = data.username;
    const passwordInput = data["kata-sandi"];

    // get data dari localStorage
    const localStorageData = JSON.parse(localStorage.getItem("user")) || [];

    // cek user input
    const userData = localStorageData.find(
      (user) => user.username === usernameInput
    );

    if (!userData) {
      alert("user tidak ditemukan!");
    }
    if (passwordInput !== userData["kata-sandi"]) {
      alert("password salah!");
      return;
    }
    // pura-pura buat token & redirect ke halaman home jika berhasil login
    localStorage.setItem("token", userData.username);
    navigate("/");
  };
  return <AuthLayouts type="masuk" onSubmit={handleLogin} />;
};

export default LoginPage;

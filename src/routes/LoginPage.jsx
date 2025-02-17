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
    const username = localStorageData.username;
    const password = localStorageData["kata-sandi"];

    // cek user input
    if (!data) return;
    if (usernameInput !== username) {
      alert("user tidak ditemukan!");
      return;
    }
    if (passwordInput !== password) {
      alert("password salah!");
      return;
    }

    // buat token & redirect ke halaman home jika berhasil login
    localStorage.setItem("token", "pura-pura token");
    navigate("/");
  };
  return <AuthLayouts type="masuk" onSubmit={handleLogin} />;
};

export default LoginPage;

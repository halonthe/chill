import Auth from "../components/Auth";
import { useNavigate } from "react-router";

const LoginPage = ({ setLogined }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // cegah browser relaod
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // get data dari localStorage
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    // validasi
    const usernameInput = data.username;
    const passwordInput = data["kata-sandi"];
    const username = localStorageData.username;
    const password = localStorageData["kata-sandi"];
    // cek input form
    if (!data) return;
    if (usernameInput !== username) {
      alert("user tidak ditemukan!");
      return;
    }
    if (passwordInput !== password) {
      alert("password salah!");
      return;
    }

    // redirect ke halaman home jika berhasil login
    setLogined(true);
    navigate("/");
  };
  return <Auth type="masuk" onSubmit={handleLogin} />;
};

export default LoginPage;

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
    const userData = JSON.parse(localStorage.getItem("user")) || [];
    const userFilter = userData.find((user) => user.username === usernameInput);

    if (!userFilter) {
      alert("user tidak ditemukan!");
      return;
    }
    if (passwordInput !== userFilter["kata-sandi"]) {
      alert("password salah!");
      return;
    }
    // pura-pura buat token & redirect ke halaman home jika berhasil login
    localStorage.setItem("token", userFilter.username);
    navigate("/");
  };
  return <AuthLayouts type="masuk" onSubmit={handleLogin} />;
};

export default LoginPage;

import { useNavigate } from "react-router";
import AuthLayouts from "../layouts/AuthLayouts";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    // cegah browser reload
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const password = data["kata-sandi"];
    const confirmPassword = data["konfirmasi-kata-sandi"];

    // cek user input
    if (!data) {
      alert("semua field harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("konfirmasi password salah!");
      return;
    }

    // save data user ke localStorage
    const localStorageData = JSON.parse(localStorage.getItem("user")) || [];

    const newUser = [
      { username: data.username, "kata-sandi": password },
      ...localStorageData,
    ];

    localStorage.setItem("user", JSON.stringify(newUser));

    // redirect ke halaman login setelah daftar
    navigate("/login");
  };
  return <AuthLayouts type="daftar" onSubmit={handleRegister} />;
};

export default RegisterPage;

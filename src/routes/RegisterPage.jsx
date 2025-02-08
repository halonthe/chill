import { useNavigate } from "react-router";
import Auth from "../components/Auth";

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

    // return jika input kosong
    if (!data) return;
    // alert jika password !== confirmPassword
    if (password !== confirmPassword) {
      alert("konfirmasi password salah!");
      return;
    }

    // save data user ke localStorage
    localStorage.setItem("user", JSON.stringify(data));

    // redirect ke halaman login setelah daftar
    navigate("/login");
  };
  return <Auth type="daftar" onSubmit={handleRegister} />;
};

export default RegisterPage;

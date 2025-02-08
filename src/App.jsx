import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import LoginPage from "./routes/LoginPage";
import MainLayout from "./layouts/MainLayout";
import RegisterPage from "./routes/RegisterPage";
import HomePage from "./routes/HomePage";
import MyListPage from "./routes/MyListPage";
import MoviePage from "./routes/MoviePage";
import SeriesPage from "./routes/SeriesPage";
import ProfilePage from "./routes/ProfilePage";
import SubscribePage from "./routes/SubscribePage";
import PaymentPage from "./routes/PaymentPage";
import ConfirmPaymentPage from "./routes/ConfirmPaymentPage";
import VideoPlayer from "./components/VideoPlayer";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useState } from "react";

const App = () => {
  const [logined, setLogined] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="login" element={<LoginPage setLogined={setLogined} />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes logined={logined} />}>
          {/* Home Routes */}
          <Route element={<MainLayout setLogined={setLogined} />}>
            <Route index element={<HomePage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="film" element={<MoviePage />} />
            <Route path="daftar-saya" element={<MyListPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="subscribe" element={<SubscribePage />} />
            <Route path="payments" element={<PaymentPage />} />
            <Route path="payments/:slug" element={<ConfirmPaymentPage />} />
          </Route>
          {/* watch */}
          <Route path="watch/:slug" element={<VideoPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

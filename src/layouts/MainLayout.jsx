import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center w-screen h-auto mx-auto font-lato">
      <Header />
      <main className="relative mt-[56px] mb-5 max-w-[1440px] w-full min-h-screen h-auto sm:mt-[94px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

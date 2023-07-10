import logo from "../assets/images/logo.svg";
import { NavBar } from "../components/NavBar";

export const Header = () => {
  return (
    <header className="mb-8 mt-10 flex items-center justify-between px-4 xl:mb-12 xl:mt-20 xl:px-36">
      <img src={logo} alt="Logo de news" />
      <NavBar />
    </header>
  );
};

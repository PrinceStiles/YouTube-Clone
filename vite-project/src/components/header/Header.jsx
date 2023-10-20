import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = () => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="logo"
        className="header__logo"
      />

      <form>
        <input type="text" placeholder="search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={22} />
        <MdApps size={22} />
        <img src="./src/assets/react.svg" alt="avatar" />
      </div>
    </div>
  );
};

export default Header;

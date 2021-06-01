import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

//handletoggle was the function passed as props
const Header = ({ handleToggle }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggle()}
      />
      <img
        src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
        alt="Mytube logo"
        className="header__logo"
      />{" "}
      <form>
        <input type="text" placeholder="Search any youtube video" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons ">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.seekpng.com/png/full/356-3562377_personal-user.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;

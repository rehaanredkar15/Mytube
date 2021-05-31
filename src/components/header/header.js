import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
const Header = () => {
  return (
    <div className="border border-dark">
      <FaBars className="header__menu" size={26} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG102352.png"
        alt="Mytube logo"
        className="header__logo"
      />
      MYTube
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
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.seekpng.com%2Fpng%2Ffull%2F356-3562377_personal-user.png&imgrefurl=https%3A%2F%2Fwww.seekpng.com%2Fima%2Fu2e6w7a9r5u2y3u2%2F&tbnid=0WCMHJOqQ0-MmM&vet=12ahUKEwiYrfil5_TwAhWfCbcAHQG2BhAQMyhEegQIARB_..i&docid=TI89HUMY6O3bZM&w=356&h=400&q=user%20image&ved=2ahUKEwiYrfil5_TwAhWfCbcAHQG2BhAQMyhEegQIARB_"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdLibraryBooks,
  MdHome,
  MdHistory,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <nav className="border border-danger sidebar">
      <ul>
        <MdHome size={23} className="sidebar__icons" />
        <p>Home</p>
      </ul>

      <ul>
        <MdThumbUp size={23} className="sidebar__icons" />
        <p>liked Videos </p>
      </ul>
      <ul>
        <MdSubscriptions size={23} className="sidebar__icons" />
        <p>Subscriptions </p>
      </ul>
      <ul>
        <MdLibraryBooks size={23} className="sidebar__icons" />
        <p>Library</p>
      </ul>
      <ul>
        <MdHistory size={23} className="sidebar__icons" />
        <p>Watch History</p>
      </ul>
      <hr />
      <ul>
        <MdExitToApp size={23} className="sidebar__icons" />
        <span>Log Out</span>
      </ul>
      <hr />
    </nav>
  );
};

export default Sidebar;

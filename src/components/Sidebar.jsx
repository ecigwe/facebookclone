import React from "react";
import "./sidebar.css";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SidebarRow from "./SidebarRow";
import { useStateValue } from "./../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={EmojiFlagsIcon} title={"pages"} />

      <SidebarRow Icon={LocalHospitalIcon} title={"covid 19 info center"} />
      <SidebarRow Icon={PeopleIcon} title={"friends"} />
      <SidebarRow Icon={ChatIcon} title={"messenger"} />
      <SidebarRow Icon={StorefrontIcon} title={"marketp;ace"} />
      <SidebarRow Icon={VideoLibraryIcon} title={"videos"} />
      <SidebarRow Icon={ExpandMoreIcon} title={"messenger"} />
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Avatar from "@mui/material/Avatar";
import Sideitem from "./SideItem/Sideitem";
import { useSelector } from "react-redux";
import { auth } from "../../Firebase/Firebase";

function Sidebar() {
  const user = useSelector((state) => state.login.user);
  console.log(user);
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <TwitterIcon />
        </div>
        <Sideitem Icon={HomeIcon} Name="Home" active />
        <Sideitem Icon={TagIcon} Name="Explore" />
        <Sideitem Icon={NotificationsNoneIcon} Name="Notifications" />
        <Sideitem Icon={MailOutlinedIcon} Name="Messages" />
        <Sideitem Icon={BookmarkBorderOutlinedIcon} Name="Bookmarks" />
        <Sideitem Icon={FormatListBulletedOutlinedIcon} Name="Lists" />
        <Sideitem Icon={PersonOutlineOutlinedIcon} Name="Profile" />
        <Sideitem Icon={MoreHorizOutlinedIcon} Name="More" />
        <button className="tweet">Tweet</button>
        <div className="user">
          <div className="user__left" onClick={() => auth.signOut()}>
            <Avatar src={user.avatar} />
          </div>
          <div className="user__mid">
            <h3>{user.name}</h3>
            <span>{user.username}</span>
          </div>
          <div className="user__right">
            <MoreHorizOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
